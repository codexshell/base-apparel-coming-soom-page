<script>
	let email; // bind to email input element
	let invalid = false;

	const handleInput = () => {
		if (email.validity.typeMismatch) {
			invalid = true;
		} else {
			invalid = false;
		}
	};
</script>

<form>
	<input
		bind:this={email}
		on:input={handleInput}
		type="email"
		required
		placeholder="Email Address"
		pattern=".+@.+\..+"
		class:input-invalid={invalid}
	/>
	<button type="submit"><span class:error={invalid} />Submit</button>
</form>
<p class:p-invalid={invalid}>Please provide a valid email</p>

<style>
	form {
		--flow-space: 2rem;
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	@media (min-width: theme('screens.xl')) {
		form {
			--flow-space: 3rem;
		}
	}

	input {
		background-color: transparent;
		border: solid 0.0625rem theme('colors.p-desaturated-red');
		border-radius: theme('borderRadius.full');
		padding-block: theme('padding[3]');
		width: 100%;
		padding-right: theme('padding.28');
		color: theme('colors.n-dark-grayish-red');
		padding-left: theme('padding.6');
	}

	input::placeholder {
		color: theme('colors.p-desaturated-red');
		opacity: 0.6;
	}

	button {
		--flow-space: ;
		text-indent: -9999px;
		background: url('/icon-arrow.svg') no-repeat center,
			linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
		border-radius: theme('borderRadius.full');
		position: absolute;
		right: -0.125rem;
		top: -0.125rem;
		bottom: -0.125rem;
		width: 4.5rem;
		box-shadow: 0 0.6rem 1rem rgba(0, 0, 0, 0.35);
	}

	button:hover {
		filter: brightness(1.2);
	}

	@media (min-width: theme('screens.lg')) {
		button {
			width: 6.5rem;
		}
	}

	button span {
		content: '';
		background: url('/icon-error.svg') no-repeat;
		position: absolute;
		inset: 0;
		top: 1rem;
		left: -2.5rem;
		display: none;
	}

	p {
		--flow-space: 0.5rem;
		font-size: theme('fontSize.sm');
		color: theme('colors.p-soft-red');
		text-align: left;
		padding-left: theme('padding.8');
		display: none;
		position: absolute;
	}

	/* display paragraph when invalid is true */
	.p-invalid {
		display: block;
	}

	/* change input element outline when invaid is true */
	.input-invalid {
		outline: solid 0.125rem theme('colors.p-soft-red');
	}

	/* display error icon when invalid is true */
	.error {
		display: block;
	}
</style>
