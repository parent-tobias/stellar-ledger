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