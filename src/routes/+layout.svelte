<script lang="ts">
	import LightDarkSwitcher from './light-dark-switcher.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="MyWebSite" />
	<link rel="manifest" href="/site.webmanifest" />
	<title>RnS Seedy</title>
</svelte:head>

<header>
	<h1>RnS Seedy</h1>
	<LightDarkSwitcher />
</header>
<main>
	{@render children()}
</main>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		h1 {
			font-size: 2rem;
		}
	}
</style>
