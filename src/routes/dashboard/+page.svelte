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