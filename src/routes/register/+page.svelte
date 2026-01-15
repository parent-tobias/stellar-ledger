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