<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();
</script>

<div class="container max-w-screen-xl mx-auto px-4">
	<Header />

	<main class="mt-12 px-3">
		{@render children()}
	</main>

	<Footer />
</div>