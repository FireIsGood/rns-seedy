<script lang="ts">
	import { RatingGroup, type WithoutChildrenOrChild } from 'bits-ui';

	let {
		value = $bindable(0),
		ref = $bindable(null),
		...restProps
	}: WithoutChildrenOrChild<RatingGroup.RootProps> = $props();

	const max_players = 4;
</script>

<div class="player-count">
	<p>Player Count</p>
	<RatingGroup.Root
		bind:value
		bind:ref
		min={1}
		max={max_players}
		{...restProps}
		class="player-count-group"
	>
		{#snippet children({ items })}
			{#each items as item (item.index)}
				<RatingGroup.Item index={item.index}>
					<img
						src={item.state === 'inactive' ? 'images/rabbit.svg' : 'images/rabbit_and_steel.svg'}
						alt="rabbit"
						class="player"
						class:inactive={item.state === 'inactive'}
					/>
				</RatingGroup.Item>
			{/each}
		{/snippet}
	</RatingGroup.Root>
</div>

<style>
	.player-count {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	:global(.player-count-group) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.5rem;
		width: fit-content;
	}

	.player {
		height: 40px;
		user-drag: none;

		-webkit-user-drag: none;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;

		&:hover {
			filter: drop-shadow(0 0 4px var(--color-white));
		}
		&:active {
			filter: drop-shadow(0 0 2px var(--color-white));
		}
	}

	.inactive {
		opacity: 0.25;
	}
</style>
