<script>
	let bmi;
	let height;
	let weight;
	export let name;

	function buttonClick() {
	bmi=weight/((height/100)^2);
	}
</script>
<main>
	<h1>BMI-Kalkulator</h1>
	<p>Dette er Sverre´s BMI-kalkulator! 😎</p>
	<div class="form">
		Høyde (cm)<br/>
		<input bind:value={height}/>
	</div>
	<div class="form">	
		Vekt (kg)<br/>
		<input bind:value={weight}/>
	</div>
	<button on:click="{buttonClick}">Kalkuler BMI´en min</button>
	
	<div>
		{#if bmi>25}
		<h3>Din BMI er {bmi}</h3>
		Du er for feit.
		{:else if bmi<18.5}
		<h2>Din BMI er {bmi}</h2>
		Du er for tynn.
		{:else if bmi>18.5 && bmi<25}
		<h4>Din BMI er {bmi}</h4>
		Din vekt er innafor.
		{/if}
	</div>

</main>
<style>

	main {
		margin: 150px;
	}

	h1 {
		font-size: 72px;
		background: -webkit-linear-gradient(#4169e1, #ff0000);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	h2 {
		font-size: 30px;
		color: yellow;
	}
	
	h3 {
		font-size: 30px;
		color: red;
	}

	h4 {
		font-size: 30px;
		color: green;
	}

	p {
		font-size: 20px;
		color: black;
	}	

	button {
		position:relative;
		transform:translate(0, 0);
		background:#e1ffff;
	}

	.uthevet {
		color: #4169e1;
	}

	.form {
		text-align: left;
		display:inline-block;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>