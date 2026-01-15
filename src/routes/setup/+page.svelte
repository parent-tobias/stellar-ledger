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