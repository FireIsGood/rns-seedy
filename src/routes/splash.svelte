<script lang="ts">
	import { onMount } from 'svelte';
	import Dialog from './Dialog.svelte';

	let dialogOpen = $state(true);
	function confirmResponsible() {
		dialogOpen = false;
	}

	let loaded = $state(false);
	onMount(() => {
		loaded = true;
	});
</script>

<div id="splash-root" class:hide={loaded}>
	<div class="splash">
		<div class="rabbit-list">
			{#each [0, 1, 2, 3] as index}
				<img
					src="images/rabbit.svg"
					alt="Spinning wizard rabbit"
					width="110"
					height="110"
					class="splash-image"
					style={`--bnuuy-index: ${index}`}
				/>
			{/each}
		</div>
		<p class="splash-description">Steel Yourself!</p>
	</div>
</div>

<Dialog
	bind:open={dialogOpen}
	contentProps={{ escapeKeydownBehavior: 'ignore' }}
	confirm="I promise to use this information responsibly"
	onAction={confirmResponsible}
>
	{#snippet title()}
		HEY!! YOU!!!
	{/snippet}
	{#snippet description()}
		<p>This information could spoil future events if used in an ongoing multiplayer game.</p>
		<p>
			<strong
				>Please do not share information gained from this without the consent of your allies!</strong
			>
		</p>
	{/snippet}
</Dialog>

<style>
	#splash-root {
		position: fixed;
		inset: 0;
		z-index: 100;
		display: grid;
		place-items: center;
		background-color: var(--surface-1);

		transition:
			display 300ms,
			opacity 300ms;
		transition-behavior: allow-discrete;

		&.hide {
			display: none;
			opacity: 0;
		}
	}

	.splash {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--size-3);
		flex-wrap: wrap;
		text-align: center;
	}

	.rabbit-list {
		display: flex;
		gap: var(--size-2);
	}

	.splash-image {
		width: 40px;
		height: 40px;
		animation: jumpy 750ms calc(60ms * var(--bnuuy-index, 0)) linear infinite;
	}

	@keyframes jumpy {
		0% {
			translate: 0 0;
		}
		6% {
			translate: 0 -4px;
		}
		16% {
			translate: 0 -5px;
		}
		20% {
			translate: 0 -5px;
		}
		33%,
		100% {
			translate: 0 0;
		}
	}

	.splash-description {
		font-size: var(--font-size-3);
		color: var(--text-2);
	}
</style>
