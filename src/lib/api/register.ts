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