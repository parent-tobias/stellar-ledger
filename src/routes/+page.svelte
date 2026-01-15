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