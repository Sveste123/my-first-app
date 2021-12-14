<script>
	import {bmiCalculator} from "./bmi.js"

	let result;
	let height;
	let weight;
	let bmiCalc = new bmiCalculator();
	
	function buttonClick() {
		result = bmiCalc.calculate(height, weight);
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
		{#if result}	
		<div class="result" style="color:{result.color};">Din BMI er {result.bmi}</div>
		<div>{result.text}</div>
		{/if}		
	</div>

</main>
<style>

	main {
		margin: 15px;
	}

	h1 {
		font-size: 50px;
		background: -webkit-linear-gradient(#4169e1, #ff0000);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.result {
		font-size: 30px;
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