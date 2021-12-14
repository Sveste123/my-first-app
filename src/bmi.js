import { text } from "svelte/internal";

export class bmiCalculator {

    findColor(bmi) {
        if (bmi > 25) {
            return "red";
        }
        else if (bmi <= 25 && bmi >= 18.5) {
            return "lightgreen";
        }
        else return "#9B9B00";
        
    }

    findText(bmi) {
        if (bmi > 25) {
            return "Du kan spise mindre bacon.";
        }
        else if (bmi <= 25 && bmi >= 18.5) {
            return "Du er innafor!";
        }
        else return "Du kan spise mer ribbe.";
    }

    calculate(height, weight) {
        const meters = height/100;
        const value = weight / (meters*meters);

        console.log(weight, height, value, meters);
        return {
            bmi: value,
            color: this.findColor(value),
            text: this.findText(value)
        };
    }
}

/*
Du er for feit.
		{:else if bmi<18.5}
		<h2>Din BMI er {result.bmi}</h2>
		Du er for tynn.
		{:else if bmi>18.5 && bmi<25}
		<h4>Din BMI er {resultbmi}</h4>
		Din vekt er innafor.
		{/if}

*/