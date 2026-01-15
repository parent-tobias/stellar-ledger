# Day 02: SpaceTraders API & Authentication

**Week**: 1 of 4
**Day**: 2 of 20 (Tuesday)

**Objectives**:
- [ ] Register for SpaceTraders API account
- [ ] Understand API structure (agents, ships, systems, waypoints)
- [ ] Create TypeScript API client service
- [ ] Implement authentication flow
- [ ] Store token securely
- [ ] Display agent information in UI

**Time Budget**: 90 minutes

---

## Prerequisites

- Day 1 complete (SvelteKit project running)
- Internet connection for API access
- Web browser for testing

---

## Step 1: Understand SpaceTraders Authentication

**Important**: SpaceTraders uses a two-token system. Understanding this is key to building the right user experience.

### Read the API Documentation

Visit [https://docs.spacetraders.io/](https://docs.spacetraders.io/)

Key concepts to understand:
- **Account Token**: For managing your account and registering agents (player gets this from SpaceTraders dashboard)
- **Agent Token**: For playing as a specific agent (we get this from registration API)
- **Agent**: Your player character
- **Ships**: Vehicles you control
- **Systems**: Solar systems with waypoints
- **Waypoints**: Locations (planets, stations, asteroids)
- **Markets**: Where you buy/sell goods
- **Contracts**: Missions (we'll skip these initially)

### The Token Flow for Players

Unlike a server application where you'd store secrets in `.env`, stellar-ledger is a **personal client tool**. The player needs to:

1. Create a SpaceTraders account at [spacetraders.io](https://spacetraders.io)
2. Generate an account token from their Settings dashboard
3. Enter that token into stellar-ledger (first-run setup)
4. Register agents through our UI
5. Play as any of their agents

We'll store both tokens client-side in localStorage - this is appropriate because:
- It's a personal tool running locally
- The player owns both tokens
- No server-side secrets needed

---

## Step 2: Create Auth Store for Both Tokens

We need to store both the account token (for registering agents) and agent tokens (for gameplay). Both will live in localStorage since this is a client-side personal tool.

Create: `src/lib/stores/auth.ts`

```typescript
import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

const ACCOUNT_TOKEN_KEY = 'spacetraders_account_token';
const AGENT_TOKEN_KEY = 'spacetraders_agent_token';

function createAccountTokenStore() {
	const initialToken = browser ? localStorage.getItem(ACCOUNT_TOKEN_KEY) : null;
	const { subscribe, set } = writable<string | null>(initialToken);

	return {
		subscribe,
		setToken: (token: string) => {
			if (browser) {
				localStorage.setItem(ACCOUNT_TOKEN_KEY, token);
			}
			set(token);
		},
		clearToken: () => {
			if (browser) {
				localStorage.removeItem(ACCOUNT_TOKEN_KEY);
			}
			set(null);
		}
	};
}

function createAgentTokenStore() {
	const initialToken = browser ? localStorage.getItem(AGENT_TOKEN_KEY) : null;
	const { subscribe, set } = writable<string | null>(initialToken);

	return {
		subscribe,
		setToken: (token: string) => {
			if (browser) {
				localStorage.setItem(AGENT_TOKEN_KEY, token);
			}
			set(token);
		},
		clearToken: () => {
			if (browser) {
				localStorage.removeItem(AGENT_TOKEN_KEY);
			}
			set(null);
		}
	};
}

export const accountToken = createAccountTokenStore();
export const agentToken = createAgentTokenStore();

// Derived store to check if account is connected
export const isAccountConnected = derived(accountToken, ($token) => $token !== null);
```

**Why localStorage for both tokens?**
- stellar-ledger is a personal client tool, not a server application
- The player owns both tokens - there's no secret to hide from them
- Keeps the setup simple - no `.env` files for players to manage

---

## Step 3: Register Agents via API

Create the registration function that uses the stored account token.

Create: `src/lib/api/register.ts`

```typescript
import { get } from 'svelte/store';
import { accountToken } from '$lib/stores/auth';

const API_BASE = 'https://api.spacetraders.io/v2';

interface RegisterResponse {
	data: {
		token: string;
		agent: {
			accountId: string;
			symbol: string;
			headquarters: string;
			credits: number;
			startingFaction: string;
		};
		contract: unknown;
		faction: unknown;
		ship: unknown;
	};
}

export async function registerAgent(
	callsign: string,
	faction: string = 'COSMIC'
): Promise<RegisterResponse> {
	const token = get(accountToken);

	if (!token) {
		throw new Error('Account not connected. Please connect your SpaceTraders account first.');
	}

	const response = await fetch(`${API_BASE}/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify({
			symbol: callsign,
			faction
		})
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.error?.message || 'Registration failed');
	}

	return response.json();
}
```

**Understanding the Token Flow**:
1. **Account Token** (from localStorage, entered by player) → Used to register agents
2. **Agent Token** (from registration response) → Used for gameplay
3. Both tokens stored in localStorage for this personal client tool

---

## Step 4: Create API Client Service

Create the main API client: `src/lib/api/client.ts`

```typescript
const API_BASE = 'https://api.spacetraders.io/v2';

export class SpaceTradersClient {
	private token: string | null = null;

	constructor(token?: string) {
		this.token = token || null;
	}

	setToken(token: string) {
		this.token = token;
	}

	private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
		const headers: Record<string, string> = {
			'Content-Type': 'application/json'
		};

		// Merge any headers from options
		if (options.headers) {
			const optHeaders = new Headers(options.headers);
			optHeaders.forEach((value, key) => {
				headers[key] = value;
			});
		}

		// Add auth token if available
		if (this.token) {
			headers['Authorization'] = `Bearer ${this.token}`;
		}

		const response = await fetch(`${API_BASE}${endpoint}`, {
			...options,
			headers
		});

		if (!response.ok) {
			const error = await response.json();
			throw new Error(error.error?.message || `API request failed: ${response.statusText}`);
		}

		return response.json();
	}

	async getAgent() {
		return this.request<{ data: Agent }>('/my/agent');
	}

	async getShips() {
		return this.request<{ data: Ship[] }>('/my/ships');
	}

	// Add more methods as needed
}

// Types
export interface Agent {
	accountId: string;
	symbol: string;
	headquarters: string;
	credits: number;
	startingFaction: string;
}

export interface Ship {
	symbol: string;
	registration: {
		name: string;
		factionSymbol: string;
		role: string;
	};
	nav: {
		systemSymbol: string;
		waypointSymbol: string;
		route: unknown; // TODO: Type when we use navigation (Day 3)
		status: string;
		flightMode: string;
	};
	crew: unknown; // TODO: Type when needed
	frame: unknown; // TODO: Type when needed
	reactor: unknown; // TODO: Type when needed
	engine: unknown; // TODO: Type when needed
	modules: unknown[]; // TODO: Type when needed
	mounts: unknown[]; // TODO: Type when needed
	cargo: {
		capacity: number;
		units: number;
		inventory: unknown[]; // TODO: Type when we use cargo (Day 4)
	};
	fuel: {
		current: number;
		capacity: number;
	};
}
```

---

## Step 5: Account Setup UI (First-Run Experience)

Before players can register agents, they need to connect their SpaceTraders account. This is a one-time setup that guides them through getting their account token.

Create: `src/routes/setup/+page.svelte`

```svelte
<script lang="ts">
	import { accountToken } from '$lib/stores/auth';
	import { goto } from '$app/navigation';

	let token = '';
	let error = '';

	function handleConnect() {
		if (!token || token.length < 10) {
			error = 'Please enter a valid account token';
			return;
		}

		accountToken.setToken(token);
		goto('/register');
	}
</script>

<div class="container">
	<h1>Connect Your SpaceTraders Account</h1>

	<div class="instructions">
		<h2>How to get your account token:</h2>
		<ol>
			<li>Go to <a href="https://spacetraders.io" target="_blank">spacetraders.io</a></li>
			<li>Click <strong>"Play Now"</strong> or <strong>"Sign Up"</strong></li>
			<li>Create an account (email + password) or log in</li>
			<li>In the dashboard, click <strong>"Settings"</strong> in the sidebar</li>
			<li>Click <strong>"Generate Account Token"</strong></li>
			<li>Copy the token and paste it below</li>
		</ol>
	</div>

	<form on:submit|preventDefault={handleConnect}>
		<div class="field">
			<label for="token">Account Token</label>
			<input
				id="token"
				type="password"
				bind:value={token}
				placeholder="Paste your account token here"
			/>
			<small>This token lets you create and manage agents. It's stored locally in your browser.</small>
		</div>

		{#if error}
			<div class="error">{error}</div>
		{/if}

		<button type="submit">Connect Account</button>
	</form>
</div>

<style>
	.container {
		max-width: 600px;
		margin: 2rem auto;
		padding: 2rem;
	}

	.instructions {
		background: #f7fafc;
		border: 1px solid #e2e8f0;
		border-radius: 8px;
		padding: 1.5rem;
		margin-bottom: 2rem;
	}

	.instructions h2 {
		margin-top: 0;
		font-size: 1rem;
	}

	.instructions ol {
		margin-bottom: 0;
		padding-left: 1.25rem;
	}

	.instructions li {
		margin-bottom: 0.5rem;
	}

	.field {
		margin-bottom: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	input {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 1rem;
		font-family: monospace;
	}

	small {
		display: block;
		margin-top: 0.5rem;
		color: #666;
	}

	button {
		width: 100%;
		padding: 0.75rem;
		background: #4a5568;
		color: white;
		border: none;
		border-radius: 4px;
		font-size: 1rem;
		cursor: pointer;
	}

	.error {
		padding: 0.75rem;
		background: #fee;
		border: 1px solid #fcc;
		border-radius: 4px;
		color: #c00;
		margin-bottom: 1rem;
	}
</style>
```

**Why this approach?**
- Players manage their own tokens - no `.env` files needed
- Clear instructions guide them through the SpaceTraders setup
- Token stored in localStorage - appropriate for a personal client tool
- `type="password"` hides the token while typing for privacy

**Note on styling**: We're using inline styles with hardcoded colors (like `#f7fafc`, `#4a5568`) for now. On Day 3, we'll establish CSS custom properties in the app layout for consistent theming across all components.

---

## Step 6: Registration UI

Create a registration page: `src/routes/register/+page.svelte`

```svelte
<script lang="ts">
	import { onMount } from 'svelte';
	import { registerAgent } from '$lib/api/register';
	import { agentToken, isAccountConnected } from '$lib/stores/auth';
	import { goto } from '$app/navigation';

	let callsign = '';
	let faction = 'COSMIC';
	let loading = false;
	let error = '';

	const factions = ['COSMIC', 'VOID', 'GALACTIC', 'QUANTUM', 'DOMINION'];

	onMount(() => {
		// Redirect to setup if account not connected
		if (!$isAccountConnected) {
			goto('/setup');
		}
	});

	async function handleRegister() {
		if (!callsign || callsign.length < 3) {
			error = 'Callsign must be at least 3 characters';
			return;
		}

		loading = true;
		error = '';

		try {
			const response = await registerAgent(callsign, faction);
			agentToken.setToken(response.data.token);
			goto('/dashboard');
		} catch (e) {
			error = e instanceof Error ? e.message : 'Registration failed';
		} finally {
			loading = false;
		}
	}
</script>

<div class="container">
	<h1>Register New Agent</h1>

	<form on:submit|preventDefault={handleRegister}>
		<div class="field">
			<label for="callsign">Callsign</label>
			<input
				id="callsign"
				type="text"
				bind:value={callsign}
				placeholder="MYAGENT"
				required
				minlength="3"
				maxlength="14"
			/>
			<small>3-14 characters, alphanumeric</small>
		</div>

		<div class="field">
			<label for="faction">Starting Faction</label>
			<select id="faction" bind:value={faction}>
				{#each factions as f}
					<option value={f}>{f}</option>
				{/each}
			</select>
		</div>

		{#if error}
			<div class="error">{error}</div>
		{/if}

		<button type="submit" disabled={loading}>
			{loading ? 'Registering...' : 'Register'}
		</button>
	</form>

	<p class="note">Note: Registration creates a permanent agent. Choose your callsign carefully!</p>
</div>

<style>
	.container {
		max-width: 500px;
		margin: 2rem auto;
		padding: 2rem;
	}

	.field {
		margin-bottom: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	input,
	select {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 1rem;
	}

	small {
		display: block;
		margin-top: 0.25rem;
		color: #666;
	}

	button {
		width: 100%;
		padding: 0.75rem;
		background: #4a5568;
		color: white;
		border: none;
		border-radius: 4px;
		font-size: 1rem;
		cursor: pointer;
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.error {
		padding: 0.75rem;
		background: #fee;
		border: 1px solid #fcc;
		border-radius: 4px;
		color: #c00;
		margin-bottom: 1rem;
	}

	.note {
		margin-top: 1.5rem;
		font-size: 0.875rem;
		color: #666;
	}
</style>
```

---

## Step 7: Dashboard with Agent Info

Create a dashboard: `src/routes/dashboard/+page.svelte`

```svelte
<script lang="ts">
	import { onMount } from 'svelte';
	import { agentToken, isAccountConnected } from '$lib/stores/auth';
	import { SpaceTradersClient, type Agent } from '$lib/api/client';
	import { goto } from '$app/navigation';

	let agent: Agent | null = null;
	let loading = true;
	let error = '';

	onMount(async () => {
		// Check account first, then agent token
		if (!$isAccountConnected) {
			goto('/setup');
			return;
		}

		const token = $agentToken;
		if (!token) {
			goto('/register');
			return;
		}

		const client = new SpaceTradersClient(token);

		try {
			const response = await client.getAgent();
			agent = response.data;
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to load agent';
		} finally {
			loading = false;
		}
	});
</script>

<div class="container">
	{#if loading}
		<p>Loading...</p>
	{:else if error}
		<div class="error">{error}</div>
	{:else if agent}
		<h1>Welcome, {agent.symbol}!</h1>

		<div class="stats">
			<div class="stat">
				<span class="label">Credits</span>
				<span class="value">{agent.credits.toLocaleString()}</span>
			</div>
			<div class="stat">
				<span class="label">Headquarters</span>
				<span class="value">{agent.headquarters}</span>
			</div>
			<div class="stat">
				<span class="label">Faction</span>
				<span class="value">{agent.startingFaction}</span>
			</div>
		</div>
	{/if}
</div>

<style>
	.container {
		max-width: 800px;
		margin: 2rem auto;
		padding: 2rem;
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.stat {
		padding: 1.5rem;
		background: #f7fafc;
		border-radius: 8px;
		border: 1px solid #e2e8f0;
	}

	.label {
		display: block;
		font-size: 0.875rem;
		color: #718096;
		margin-bottom: 0.5rem;
	}

	.value {
		display: block;
		font-size: 1.5rem;
		font-weight: 600;
		color: #2d3748;
	}

	.error {
		padding: 1rem;
		background: #fee;
		border: 1px solid #fcc;
		border-radius: 4px;
		color: #c00;
	}
</style>
```

---

## Step 8: Update Homepage

Update `src/routes/+page.svelte` to check auth state and redirect appropriately:

```svelte
<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { agentToken, isAccountConnected } from '$lib/stores/auth';

	onMount(() => {
		if (!$isAccountConnected) {
			// First-time setup - need account token
			goto('/setup');
		} else if ($agentToken) {
			// Have both tokens - go to dashboard
			goto('/dashboard');
		} else {
			// Have account but no agent - register one
			goto('/register');
		}
	});
</script>

<div class="container">
	<p>Loading...</p>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 2rem auto;
		padding: 2rem;
		text-align: center;
	}
</style>
```

---

## Step 9: Test the Flow

1. Start the dev server: `pnpm dev`
2. Navigate to `http://localhost:5173`
3. Should redirect to `/setup` (first-time flow)
4. Follow instructions to get account token from SpaceTraders
5. Enter token and click "Connect Account"
6. Should redirect to `/register`
7. Register a new agent (choose a unique callsign)
8. Should redirect to `/dashboard` showing your agent info

---

## What We've Accomplished

✅ Created account setup flow (first-run experience)
✅ Created TypeScript API client
✅ Implemented two-token authentication flow
✅ Token storage with localStorage (both account and agent tokens)
✅ Registration UI with account connection check
✅ Dashboard displaying agent info

---

## Key Learnings

### 1. API Client Patterns

The client pattern we used:
- Central client class with reusable request method
- Token management
- Error handling
- TypeScript interfaces for type safety

### 2. Two Types of Tokens

SpaceTraders uses two distinct tokens:
- **Account Token**: For account management (creating/deleting agents). Player enters this during first-run setup.
- **Agent Token**: For gameplay as a specific agent. Obtained from registration response.

This separation allows you to manage multiple agents under one account.

### 3. Client-Side Token Storage

Since stellar-ledger is a personal client tool (not a server application), we store both tokens in localStorage:
- No `.env` files for players to manage
- Players own their tokens - nothing to hide from them
- Simple setup: just paste the token from SpaceTraders dashboard
- Will migrate to IndexedDB on Day 5 for more complex data

### 4. Accounting Connection

**Agents** in SpaceTraders are like **entities** in accounting. Each agent is a separate set of books - we track their assets, liabilities, and equity independently.

---

## Tomorrow's Plan (Day 3)

We'll build the ships display, navigation structure, and establish our design foundation:
- Fetch and display all ships
- Ship detail views
- Create app navigation (Dashboard, Ships, Markets, Ledger)
- Learn SvelteKit layouts
- Establish CSS custom properties for consistent theming (refactor Day 2 hardcoded colors)

---

## Common Issues and Solutions

### Issue: "Account not connected" error

**Solution**: You need to complete the first-run setup at `/setup`. Go to [spacetraders.io](https://spacetraders.io), create an account, generate an account token from Settings, and paste it into stellar-ledger.

### Issue: "Callsign already taken"

**Solution**: Callsigns are global and permanent. Choose a different one.

### Issue: Token not persisting

**Solution**: Check browser console for localStorage errors. Ensure you're not in incognito mode.

### Issue: CORS errors

**Solution**: SpaceTraders API should allow CORS from localhost. If issues persist, check your network/firewall.

### Issue: TypeScript error "Property 'Authorization' does not exist on type 'HeadersInit'"

**Solution**: Use `Record<string, string>` instead of `HeadersInit` for the headers object. `HeadersInit` is a union type that doesn't allow bracket notation assignment. The code above has been updated with the correct typing.

### Issue: ESLint complaining about `any` types

**Solution**: Use `unknown` instead of `any`. The `unknown` type is type-safe and requires you to validate before using, while `any` disables type checking entirely. ESLint enforces this to prevent runtime errors. Add TODO comments to document that you'll properly type these fields when you actually use them (e.g., `route: unknown; // TODO: Type when we use navigation (Day 3)`).

---

**Time to complete**: ~90 minutes

**Files created/modified**:
- `src/lib/api/register.ts` (created)
- `src/lib/api/client.ts` (created)
- `src/lib/stores/auth.ts` (created)
- `src/routes/setup/+page.svelte` (created - account setup flow)
- `src/routes/register/+page.svelte` (created)
- `src/routes/dashboard/+page.svelte` (created)
- `src/routes/+page.svelte` (modified)

**Commits**: Commit after completing
**Tag**: `day-02`
