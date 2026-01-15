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

## Step 1: Register for SpaceTraders API

### Visit SpaceTraders

Go to [https://spacetraders.io](https://spacetraders.io) and familiarize yourself with the game concept.

### Read the API Documentation

Visit [https://docs.spacetraders.io/](https://docs.spacetraders.io/)

Key concepts to understand:
- **Agent**: Your player account
- **Ships**: Vehicles you control
- **Systems**: Solar systems with waypoints
- **Waypoints**: Locations (planets, stations, asteroids)
- **Markets**: Where you buy/sell goods
- **Contracts**: Missions (we'll skip these initially)

### Register via API

You don't need to register on a website - registration happens via the API.

Create a file: `src/lib/api/register.ts`

```typescript
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
		contract: any;
		faction: any;
		ship: any;
	};
}

export async function registerAgent(
	callsign: string,
	faction: string = 'COSMIC'
): Promise<RegisterResponse> {
	const response = await fetch(`${API_BASE}/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
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

---

## Step 2: Create API Client Service

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
		const headers: HeadersInit = {
			'Content-Type': 'application/json',
			...options.headers
		};

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
		route: any;
		status: string;
		flightMode: string;
	};
	crew: any;
	frame: any;
	reactor: any;
	engine: any;
	modules: any[];
	mounts: any[];
	cargo: {
		capacity: number;
		units: number;
		inventory: any[];
	};
	fuel: {
		current: number;
		capacity: number;
	};
}
```

---

## Step 3: Token Storage

Create a service for storing the token: `src/lib/stores/auth.ts`

```typescript
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const TOKEN_KEY = 'spacetraders_token';

function createAuthStore() {
	// Initialize from localStorage if in browser
	const initialToken = browser ? localStorage.getItem(TOKEN_KEY) : null;
	const { subscribe, set, update } = writable<string | null>(initialToken);

	return {
		subscribe,
		setToken: (token: string) => {
			if (browser) {
				localStorage.setItem(TOKEN_KEY, token);
			}
			set(token);
		},
		clearToken: () => {
			if (browser) {
				localStorage.removeItem(TOKEN_KEY);
			}
			set(null);
		}
	};
}

export const authToken = createAuthStore();
```

---

## Step 4: Registration UI

Create a registration page: `src/routes/register/+page.svelte`

```svelte
<script lang="ts">
	import { registerAgent } from '$lib/api/register';
	import { authToken } from '$lib/stores/auth';
	import { goto } from '$app/navigation';

	let callsign = '';
	let faction = 'COSMIC';
	let loading = false;
	let error = '';

	const factions = ['COSMIC', 'VOID', 'GALACTIC', 'QUANTUM', 'DOMINION'];

	async function handleRegister() {
		if (!callsign || callsign.length < 3) {
			error = 'Callsign must be at least 3 characters';
			return;
		}

		loading = true;
		error = '';

		try {
			const response = await registerAgent(callsign, faction);
			authToken.setToken(response.data.token);
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

	<p class="note">Note: Registration creates a permanent account. Choose your callsign carefully!</p>
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

## Step 5: Dashboard with Agent Info

Create a dashboard: `src/routes/dashboard/+page.svelte`

```svelte
<script lang="ts">
	import { onMount } from 'svelte';
	import { authToken } from '$lib/stores/auth';
	import { SpaceTradersClient, type Agent } from '$lib/api/client';
	import { goto } from '$app/navigation';

	let agent: Agent | null = null;
	let loading = true;
	let error = '';

	onMount(async () => {
		const token = $authToken;

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

## Step 6: Update Homepage

Update `src/routes/+page.svelte` to check auth and redirect:

```svelte
<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { authToken } from '$lib/stores/auth';

	onMount(() => {
		if ($authToken) {
			goto('/dashboard');
		} else {
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

## Step 7: Test the Flow

1. Start the dev server: `pnpm dev`
2. Navigate to `http://localhost:5173`
3. Should redirect to `/register`
4. Register a new agent (choose a unique callsign)
5. Should redirect to `/dashboard` showing your agent info

---

## What We've Accomplished

✅ Registered for SpaceTraders API
✅ Created TypeScript API client
✅ Implemented authentication flow
✅ Token storage with localStorage
✅ Registration UI
✅ Dashboard displaying agent info

---

## Key Learnings

### 1. API Client Patterns

The client pattern we used:
- Central client class with reusable request method
- Token management
- Error handling
- TypeScript interfaces for type safety

### 2. Token Management

We used localStorage for simplicity. Alternatives:
- **IndexedDB**: More secure, larger storage
- **Session storage**: Cleared when tab closes
- **Cookies**: Can be HTTP-only for security

For now, localStorage works. We'll move to IndexedDB on Day 5.

### 3. Accounting Connection

**Agents** in SpaceTraders are like **entities** in accounting. Each agent is a separate set of books - we track their assets, liabilities, and equity independently.

---

## Tomorrow's Plan (Day 3)

We'll build the ships display and navigation structure:
- Fetch and display all ships
- Ship detail views
- Create app navigation (Dashboard, Ships, Markets, Ledger)
- Learn SvelteKit layouts

---

## Common Issues and Solutions

### Issue: "Callsign already taken"

**Solution**: Callsigns are global and permanent. Choose a different one.

### Issue: Token not persisting

**Solution**: Check browser console for localStorage errors. Ensure you're not in incognito mode.

### Issue: CORS errors

**Solution**: SpaceTraders API should allow CORS from localhost. If issues persist, check your network/firewall.

---

**Time to complete**: ~90 minutes

**Files created/modified**:
- `src/lib/api/register.ts` (created)
- `src/lib/api/client.ts` (created)
- `src/lib/stores/auth.ts` (created)
- `src/routes/register/+page.svelte` (created)
- `src/routes/dashboard/+page.svelte` (created)
- `src/routes/+page.svelte` (modified)

**Commits**: Commit after completing
**Tag**: `day-02`
