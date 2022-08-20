<script>
	import TextField from '$lib/TextField.svelte';
</script>

<svelte:head>
	<title>Base Apparel coming soon page</title>
	<meta name="description" content="coming soon page demo" />
</svelte:head>

<section>
	<div class="section__content">
		<!-- * section logo -->
		<div class="logo">
			<img src="/logo.svg" alt="" />
		</div>
	</div>

	<h1><span>We're</span> coming sooon</h1>

	<p>
		Hello fellow shoppers! We're currently building our new fashion store. Add your email below to
		stay up-to-date with announcements and our launch deals.
	</p>

	<TextField />
	<div class="hero">
		<picture>
			<source media="(max-width: 40rem)" srcset="/hero-mobile.jpg" />
			<img src="/hero-desktop.jpg" alt="" />
		</picture>
	</div>
</section>

<style></style>
