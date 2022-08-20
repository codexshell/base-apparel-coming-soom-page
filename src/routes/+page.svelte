<script>
	import TextField from '$lib/TextField.svelte';
</script>

<svelte:head>
	<title>Base Apparel coming soon page</title>
	<meta name="description" content="coming soon page demo" />
</svelte:head>

<section class="flow">
	<!-- * logo -->
	<div class="logo">
		<img src="/logo.svg" alt="" />
	</div>

	<!-- * hero mobile -->
	<div class="hero">
		<img src="/hero-mobile.jpg" alt="" />
	</div>

	<!-- * textual content -->
	<div class="content | flow">
		<h1><span>We're</span> coming soon</h1>

		<p>
			Hello fellow shoppers! We're currently building our new fashion store. Add your email below to
			stay up-to-date with announcements and our launch deals.
		</p>

		<!-- * email address input field -->
		<TextField />
	</div>
</section>

<style>
	section {
		min-height: 100vh;
		background: linear-gradient(to bottom, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
		padding-bottom: theme('padding.24');
	}

	.logo {
		padding: theme('padding.8');
	}

	.logo img {
		width: theme('width.28');
	}

	.hero {
		--flow-space: ;
	}

	.hero img {
		margin-inline: auto;
	}

	.content {
		padding-inline: theme('padding.8');
		text-align: center;
		--flow-space: 3.75rem;
	}

	h1 {
		text-transform: uppercase;
		font-size: theme('fontSize.4xl');
		font-weight: 600;
		letter-spacing: 0.85rem;
		color: theme('colors.n-dark-grayish-red');
		line-height: theme('lineHeight.tight');
	}

	h1 span {
		color: theme('colors.p-desaturated-red');
		font-weight: 300;
	}

	p {
		font-size: theme('fontSize.sm');
		--flow-space: 1rem;
		color: theme('colors.p-desaturated-red');
	}
</style>
