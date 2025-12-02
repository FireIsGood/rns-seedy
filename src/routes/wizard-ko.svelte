<script lang="ts">
	import { browser } from '$app/environment';
	import { currentLoadingCharacter as character } from '$lib/util';

	const spinOffsetSync = (Date.now() % 8000) / 8000;
</script>

{#if browser}
	<div class="wizard-ko-root">
		<div
			class="flight-ring"
			style={`--spin-offset: ${spinOffsetSync}; --character-color:
${character.color};`}
		></div>
		<img
			src={`images/characters/${character.name}_hit.png`}
			width={character.width}
			height={character.height}
			alt="Rabbit hit"
			class="wizard wizard-hit"
		/>
		<img
			src={`images/characters/${character.name}_ko.png`}
			width={character.width}
			height={character.height}
			alt="Rabbit knocked out"
			class="wizard wizard-ko"
		/>
	</div>
{/if}

<style>
	.wizard-ko-root {
		display: grid;
		place-items: center;
		min-height: 100px;
		min-width: 100px;
	}

	.wizard {
		grid-area: 1 / 1 / 1 / 1;
		scale: calc(120 / 500);
		position: absolute;
		z-index: 0;
	}

	.wizard-hit {
		opacity: 0;
		animation:
			hit 800ms linear,
			hit-color 800ms linear;
	}

	.wizard-ko {
		display: block;
		animation:
			start-hidden 800ms linear,
			float 4800ms 400ms cubic-bezier(0.37, 0, 0.63, 1) infinite;
	}

	.flight-ring {
		height: 100px;
		width: 100px;
		background-color: var(--character-color);
		translate: 0 13px;
		animation: spin 8000ms linear infinite;
		mask: url('$lib/images/flight_ring.png') 0 0 / 100px 100px;
	}

	@keyframes hit {
		0% {
			opacity: 1;
		}
		8% {
			translate: -40px 0;
		}
		22% {
			translate: 20px 0;
		}
		40% {
			translate: -5px 0;
		}
		73% {
			translate: 0 0;
			filter: none;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes hit-color {
		0% {
			filter: grayscale(100%) sepia(100%) hue-rotate(-50deg) brightness(150%) saturate(400%);
		}
		40% {
			filter: grayscale(100%) sepia(100%) hue-rotate(-50deg) brightness(150%) saturate(400%);
		}
	}

	@keyframes float {
		0%,
		100% {
			translate: 0 4px;
		}
		50% {
			translate: 0 -4px;
		}
	}

	@keyframes spin {
		0% {
			rotate: calc(var(--spin-offset) * 1turn);
		}
		100% {
			rotate: calc(var(--spin-offset) * 1turn + 1turn);
		}
	}

	@keyframes start-hidden {
		0%,
		100% {
			display: none;
		}
	}
</style>
