<script lang="ts">
	import { id_to_icon } from '$lib/item-map';
	import { Seed } from '$lib/seed';
	type Props = {
		seed: Seed;
	};

	let { seed }: Props = $props();
</script>

<div class="seed-entry">
	<h3>Seed {seed.id}</h3>
	<h4>Areas</h4>
	<p>
		{#each seed.areas as area_name, index}
			<span class:muted-text={index >= 3}>{area_name}</span>{#if index < 4},&nbsp;{/if}
		{/each}
		<em class="muted-text">(unused in vanilla)</em>
	</p>
	<h4>Chests</h4>
	<div class="chest-list">
		{#each ['Outskirts 1', 'Outskits 2', 'Area 1', 'Area 2', 'Area 3', 'Moonlit Prescipice'] as chest_number, chest_index}
			<p class="chest-label">{chest_number}</p>
			<div class="item-list">
				{#each seed.chest(chest_index) as item}
					<div class="item">
						{#await import(`$lib/assets/loot/${id_to_icon(item.id)}.webp`) then { default: src }}
							<img class="item-icon" {src} alt="Loot item" />
						{/await}
						<p>{item.name}</p>
					</div>
				{/each}
			</div>
		{/each}
	</div>
	<h4>Shops</h4>
	<ul>
		{#each [1, 2, 3, 4] as shop_number, shop_index}
			<li>
				Shop {shop_number}:
				<ul>
					<li>
						Potions: {#each seed.shop(shop_index)?.potions as potion, index}
							<span>{potion.name} ({potion.price})</span>{#if index < 2},&nbsp;{/if}
						{/each}
					</li>
					<li>
						Gems: {#each seed.shop(shop_index)?.gems as gem, index}
							<span data-gem={gem.key}>{gem.name} ({gem.price})</span>{#if index < 3},&nbsp;{/if}
						{/each}
					</li>
				</ul>
			</li>
		{/each}
	</ul>
</div>

<style>
	h4 {
		margin-top: 1rem;
	}

	.seed-entry {
		padding: 1rem;
		background-color: var(--surface-1);
		border: var(--border-size-1) solid var(--surface-4);
		border-radius: var(--radius-2);
		box-shadow: var(--shadow-2);
	}

	.chest-label {
		margin-top: 0.5rem;
	}

	.item-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: 1rem;
		background-color: var(--surface-2);
		padding: var(--size-2);
		border-radius: var(--size-2);
	}

	.item {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		color: var(--text-2);
	}

	.item-icon {
		width: 40px;
	}

	[data-gem='emerald'] {
		color: var(--color-emerald);
	}
	[data-gem='garnet'] {
		color: var(--color-garnet);
	}
	[data-gem='ruby'] {
		color: var(--color-ruby);
	}
	[data-gem='sapphire'] {
		color: var(--color-sapphire);
	}
	[data-gem='opal'] {
		color: var(--color-opal);
	}
</style>
