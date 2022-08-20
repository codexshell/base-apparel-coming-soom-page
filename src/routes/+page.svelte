<script>
	import TextField from '$lib/TextField.svelte';
</script>

<svelte:head>
	<title>Base Apparel coming soon page</title>
	<meta name="description" content="coming soon page demo" />
</svelte:head>

<section class="flow">
	<div class="left">
		<!-- * logo -->
		<div class="logo">
			<img src="/logo.svg" alt="" />
		</div>

		<!-- * hero mobile -->
		<div class="hero-mobile">
			<img src="/hero-mobile.jpg" alt="" />
		</div>

		<!-- * textual content -->
		<div class="content | flow">
			<h1><span>We're</span> coming soon</h1>

			<p>
				Hello fellow shoppers! We're currently building our new fashion store. Add your email below
				to stay up-to-date with announcements and our launch deals.
			</p>

			<!-- * email address input field -->
			<TextField />
		</div>
	</div>
	<!-- * hero desktop -->
	<div class="hero-desktop">
		<img src="/hero-desktop.jpg" alt="" />
	</div>
</section>

<style>
	section {
		padding-bottom: theme('padding.24');
	}

	@media (min-width: theme('screens.sm')) {
		section {
			padding-inline: theme('padding.12');
		}
	}

	@media (min-width: theme('screens.md')) {
		section {
			padding-inline: theme('padding.20');
		}
	}

	@media (min-width: theme('screens.lg')) {
		section {
			padding-inline: theme('padding.48');
		}
	}

	@media (min-width: theme('screens.xl')) {
		section {
			display: flex;
			padding: 0;
			padding-bottom: 0;
		}
	}

	@media (min-width: theme('screens.xl')) {
		.left {
			padding-top: theme('padding.8');
			padding-left: 8.25rem;
			padding-right: 12rem;
			flex-basis: 57.5%;
			padding-bottom: theme('padding.40');
			background-image: url("/bg-pattern-desktop.svg");
			background-repeat: no-repeat;
			background-position: top left;
			background-size: cover;
		}

		.hero-desktop {
			flex-basis: 42.5%;
			--flow-space: ;
		}

		.hero-desktop img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.logo {
		padding: theme('padding.8');
	}

	.logo img {
		width: theme('width.28');
	}

	@media (min-width: theme('screens.sm')) {
		.logo img {
			width: theme('width.32');
		}
	}

	@media (min-width: theme('screens.md')) {
		.logo img {
			width: theme('width.36');
		}
	}

	@media (min-width: theme('screens.xl')) {
		.logo img {
			width: theme('width.40');
		}
	}

	.hero-mobile {
		--flow-space: ;
	}

	@media (min-width: theme('screens.xl')) {
		.hero-mobile {
			display: none;
		}
	}

	.hero-mobile img {
		margin-inline: auto;
	}

	.content {
		padding-inline: theme('padding.8');
		text-align: center;
		--flow-space: 3.75rem;
	}

	@media (min-width: theme('screens.xl')) {
		.content {
			--flow-space: 6rem;
		}
	}

	h1 {
		text-transform: uppercase;
		font-size: theme('fontSize.4xl');
		font-weight: 600;
		letter-spacing: 0.85rem;
		color: theme('colors.n-dark-grayish-red');
		line-height: theme('lineHeight.tight');
	}

	@media (min-width: theme('screens.md')) {
		h1 {
			font-size: theme('fontSize.5xl');
		}
	}

	@media (min-width: theme('screens.xl')) {
		h1 {
			font-size: theme('fontSize.6xl');
			letter-spacing: 1.25rem;
			text-align: left;
			line-height: 1.15;
		}
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

	@media (min-width: theme('screens.sm')) {
		p {
			padding-inline: theme('padding.7');
		}
	}

	@media (min-width: theme('screens.md')) {
		p {
			font-size: theme('fontSize.base');
			padding-inline: theme('padding.8');
		}
	}

	@media (min-width: theme('screens.lg')) {
		p {
			padding-inline: theme('padding.14');
		}
	}

	@media (min-width: theme('screens.xl')) {
		p {
			text-align: left;
			--flow-space: 1.5rem;
			line-height: theme('lineHeight.relaxed');
			padding-inline: 0;
		}
	}

	.hero-desktop {
		display: none;
	}

	@media (min-width: theme('screens.xl')) {
		.hero-desktop {
			display: block;
		}
	}
</style>
