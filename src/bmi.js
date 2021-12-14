import { text } from "svelte/internal";

export class bmiCalculator {

    findColor(bmi) {
        if (bmi > 25) {
            return "red";
        }
        else if (bmi < 25 && bmi > 18.5) {
            return "green";
        }
        else return "yellow";
        
    }

    findText(bmi) {
        if (bmi > 25) {
            return "Du kan spise mindre bacon";
        }
        else if (bmi < 25 && bmi > 18.5) {
            return "Du er innafor";
        }
        else return "Du kan spise mer ribbe";
    }

    calculate(height, weight) {
        const value = weight / (0.01*height^2);
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