# Day 02: SpaceTraders API & Authentication

**Date**: [Your date here]
**Time Spent**: [Your time here] minutes
**Git Tag**: `day-02`

## Objectives

What we set out to accomplish today:

- [ ] Get account token from SpaceTraders dashboard
- [ ] Understand API structure and token types
- [ ] Create TypeScript API client service
- [ ] Implement agent registration flow
- [ ] Store agent token in localStorage
- [ ] Display agent information in UI

## What We Built

### Understanding the Token Flow

SpaceTraders uses a two-token system:

1. **Account Token**: Player gets this from the SpaceTraders dashboard (Settings → Generate Account Token)
2. **Agent Token**: We get this from the registration API response

Since stellar-ledger is a **personal client tool** (not a server application), we designed a first-run setup flow where players enter their account token directly into the app. Both tokens are stored in localStorage - this is appropriate because the player owns both tokens and there's no server-side secret to protect.

### SpaceTraders API Client

Built a reusable API client class that handles authentication, error handling, and request formatting for the SpaceTraders API.

```typescript
export class SpaceTradersClient {
	private token: string | null = null;

	private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
		const headers: Record<string, string> = {
			'Content-Type': 'application/json'
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
			throw new Error(error.error?.message || 'API request failed');
		}

		return response.json();
	}

	async getAgent() {
		return this.request<{ data: Agent }>('/my/agent');
	}
}
```

**Key design decisions**:
- Generic `request<T>()` method for type-safe responses
- Centralized error handling
- Token injection for authenticated requests
- TypeScript interfaces for API responses

**Files created**:
- `src/lib/api/client.ts` - Main API client
- `src/lib/api/register.ts` - Registration endpoint using stored account token
- `src/lib/stores/auth.ts` - Svelte stores for both account and agent tokens

### Agent Registration

The registration function retrieves the account token from the Svelte store (which reads from localStorage):

```typescript
import { get } from 'svelte/store';
import { accountToken } from '$lib/stores/auth';

export async function registerAgent(callsign: string, faction: string = 'COSMIC') {
	const token = get(accountToken);

	if (!token) {
		throw new Error('Account not connected. Please connect your SpaceTraders account first.');
	}

	const response = await fetch(`${API_BASE}/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}` // Account token for registration
		},
		body: JSON.stringify({ symbol: callsign, faction })
	});

	// Response contains the agent token for gameplay
	return response.json();
}
```

### Authentication Flow

Implemented a complete auth flow: setup account → register agent → store agent token → authenticated requests.

```typescript
// Svelte stores with localStorage persistence for both tokens
const ACCOUNT_TOKEN_KEY = 'spacetraders_account_token';
const AGENT_TOKEN_KEY = 'spacetraders_agent_token';

function createAccountTokenStore() {
	const initialToken = browser ? localStorage.getItem(ACCOUNT_TOKEN_KEY) : null;
	const { subscribe, set } = writable<string | null>(initialToken);

	return {
		subscribe,
		setToken: (token: string) => {
			if (browser) localStorage.setItem(ACCOUNT_TOKEN_KEY, token);
			set(token);
		},
		clearToken: () => {
			if (browser) localStorage.removeItem(ACCOUNT_TOKEN_KEY);
			set(null);
		}
	};
}

export const accountToken = createAccountTokenStore();
export const agentToken = createAgentTokenStore(); // Similar pattern

// Derived store to check setup status
export const isAccountConnected = derived(accountToken, ($token) => $token !== null);
```

**Understanding the Two Tokens**:
- **Account Token**: Entered by player during first-run setup, stored in localStorage
- **Agent Token**: Stored in localStorage, used for gameplay as a specific agent

**Why localStorage for both tokens?**
- stellar-ledger is a personal client tool, not a server application
- The player owns both tokens - nothing to hide from them
- No `.env` files for players to manage
- Will migrate to IndexedDB on Day 5 for more complex data

**Files created**:
- `src/routes/setup/+page.svelte` - First-run account setup with instructions
- `src/routes/register/+page.svelte` - Registration UI
- `src/routes/dashboard/+page.svelte` - Dashboard showing agent info
- `src/routes/+page.svelte` - Homepage with auth redirect

### Registration UI

Created a form for registering new SpaceTraders agents with callsign and faction selection.

```svelte
<form on:submit|preventDefault={handleRegister}>
	<input bind:value={callsign} placeholder="MYAGENT" required />
	<select bind:value={faction}>
		{#each factions as f}
			<option value={f}>{f}</option>
		{/each}
	</select>
	<button type="submit" disabled={loading}>
		{loading ? 'Registering...' : 'Register'}
	</button>
</form>
```

### Dashboard with Agent Stats

Displays authenticated user's agent information: credits, headquarters, faction.

```svelte
<div class="stats">
	<div class="stat">
		<span class="label">Credits</span>
		<span class="value">{agent.credits.toLocaleString()}</span>
	</div>
	<!-- More stats... -->
</div>
```

## Accounting Concept Introduced

**Concept**: Accounts and Entities

**Explanation**: In accounting, an "entity" is a business or individual whose financial activities are tracked separately. Each entity has its own set of "accounts" (not to be confused with user accounts) that categorize different types of financial activity.

**Implementation**: In SpaceTraders, each "agent" is an accounting entity. Just like a business maintains separate books from its owners' personal finances, each agent's financial activities (credits earned, ships purchased, goods traded) are tracked independently.

**Player Experience**: When players register their agent and see their starting credits, they're seeing the beginning balance of their entity's books. This is equivalent to a business recording its initial capital investment.

## Technical Deep Dive

### TypeScript Interface Design for API Responses

**Why this approach**: Used `unknown` instead of `any` for untyped fields.

```typescript
export interface Ship {
	symbol: string;
	nav: {
		route: unknown; // TODO: Type when we use navigation (Day 3)
		status: string;
	};
	crew: unknown; // TODO: Type when needed
	cargo: {
		inventory: unknown[]; // TODO: Type when we use cargo (Day 4)
	};
}
```

**Alternatives considered**:
- **`any`**: Disables type checking (dangerous)
- **Full typing upfront**: Would require understanding entire API before starting
- **`unknown`**: Forces type checks before use (safe incrementalism)

**Trade-offs**:
- **Pro**: Type-safe, documents what we haven't typed yet
- **Con**: Requires type assertions when accessing these fields later

### Svelte Stores with Side Effects

**Pattern**: Wrapping localStorage access in a custom Svelte store.

```typescript
function createAuthStore() {
	const { subscribe, set } = writable<string | null>(initialToken);

	return {
		subscribe,
		setToken: (token: string) => {
			if (browser) localStorage.setItem(TOKEN_KEY, token);
			set(token);
		}
	};
}
```

**Why this matters**:
- Encapsulates side effects (localStorage) within the store
- Components remain pure - they just react to store changes
- Prevents localStorage access during SSR (`browser` check)

## Gotchas Encountered

### SpaceTraders API Flow Changed

**What happened**: Started implementing direct API registration, then discovered the docs mention needing an account token from the dashboard first.

**Why it happened**: SpaceTraders v2 API changed their authentication model. Previously, the `/register` endpoint was completely public. Now you need:
1. Manual account creation on spacetraders.io
2. Account token from dashboard Settings
3. Use account token to register agents via API
4. Each agent gets its own token

**How we fixed it**: Built a first-run setup flow (`/setup`) that guides players through getting their account token and entering it into the app. The token is stored in localStorage, which is appropriate for a personal client tool.

**Prevention**: Always check the "Quickstart" docs for recent API changes, not just the endpoint reference.

### Account Token Storage: .env vs localStorage

**What happened**: Initially planned to store the account token in `.env` like a typical server application.

**Why it happened**: Developer instinct - secrets usually go in `.env`. But stellar-ledger is a personal client tool, not a server.

**How we fixed it**: Realized the player needs to manage their own token. Built a setup UI with clear instructions for getting the token from SpaceTraders. Stored in localStorage alongside the agent token.

**Prevention**: Consider who owns the secret and who the application serves. For personal tools, the user should manage their own credentials through the UI.

### TypeScript Error: "Property 'Authorization' does not exist on type 'HeadersInit'"

**What happened**: TypeScript error when trying to set `headers['Authorization']`.

**Why it happened**: `HeadersInit` is a union type that can be an object, array, or Headers instance. TypeScript doesn't allow bracket notation on union types.

**How we fixed it**: Changed type from `HeadersInit` to `Record<string, string>`.

```typescript
// ❌ Doesn't work
const headers: HeadersInit = { 'Content-Type': 'application/json' };
headers['Authorization'] = 'Bearer ...'; // Error!

// ✅ Works
const headers: Record<string, string> = { 'Content-Type': 'application/json' };
headers['Authorization'] = 'Bearer ...'; // No error
```

**Prevention**: When building dynamic objects, use explicit types like `Record<K, V>` rather than complex union types.

### ESLint Complaining About `any` Types

**What happened**: ESLint flagged all `any` types in the Ship interface.

**Why it happened**: ESLint's `@typescript-eslint/no-explicit-any` rule enforces type safety.

**How we fixed it**: Replaced `any` with `unknown` and added TODO comments.

**Prevention**: Use `unknown` for truly unknown types, document with TODOs when you'll type them properly.

## Gotchas Avoided

- **Hardcoding API URL**: Using a constant makes it easy to switch between prod/dev/mock APIs later
- **Inline error handling**: Centralized error handling in `request()` method keeps calling code clean
- **SSR localStorage access**: The `browser` check prevents SSR crashes
- **Premature theming abstraction**: We used hardcoded colors in inline styles for now. Day 3 will introduce CSS custom properties when we create the app layout - the natural place to define app-wide design tokens

## Abstracted Learnings

1. **API client pattern**: A single client class with generic methods scales better than individual fetch calls throughout the app
2. **Store encapsulation**: Wrapping side effects (localStorage, API calls) in stores keeps components pure and testable
3. **Incremental typing**: Using `unknown` with TODOs is better than `any` or over-engineering types upfront
4. **Auth flow fundamentals**: Setup Account → Register Agent → Store Token → Inject in Requests is a universal pattern
5. **Client vs Server thinking**: Personal tools should let users manage their own credentials through the UI, not through config files

## Tomorrow's Plan

What we'll tackle on Day 3:

- Fetch and display all ships from the API
- Create ship detail views with stats
- Build navigation structure (Dashboard, Ships, Markets, Ledger)
- Learn SvelteKit layouts for consistent navigation
- Establish CSS custom properties for theming (refactor Day 2 hardcoded colors)
- Understand ships as accounting assets

## Resources Referenced

- [SpaceTraders API Docs](https://docs.spacetraders.io/) - API structure and endpoints
- [SpaceTraders Quickstart](https://docs.spacetraders.io/quickstart/new-game) - Registration flow
- [Svelte Stores Guide](https://svelte.dev/docs/svelte-store) - Custom stores with side effects
- [TypeScript Handbook: unknown type](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown) - Safe typing for unknowns

## Code Stats

- **Files added**: 6 (API client, register, auth store, setup page, register page, dashboard page)
- **Files modified**: 1 (`src/routes/+page.svelte`)
- **Lines added**: ~400
- **Lines removed**: ~10
- **Tests added**: 0 (coming on Day 19)

## Commits

Key commits:
- Create SpaceTraders API client with TypeScript
- Implement two-token authentication flow with localStorage
- Build account setup flow with player instructions
- Build registration and dashboard UI
- Add auth-aware redirect logic to homepage

---

**Status**: [✅ All objectives completed | ⚠️ Partial completion | ❌ Blocked]

**Next Session**: Day 3 - Ships & Navigation UI
