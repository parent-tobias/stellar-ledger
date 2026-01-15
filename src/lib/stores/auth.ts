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