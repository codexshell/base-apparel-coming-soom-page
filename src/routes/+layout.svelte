<script>
	import '../app.css';
</script>


<main>
	<slot />
</main>


<style>
	:global(body) {
		font-family: theme("fontFamily.josefin-sans");
		min-height: 100vh;
		max-width: 90rem;
		background: linear-gradient(to bottom, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
	}

	:global(html) {
		display: grid;
		place-content: center	;
	}
</style>
