import { Calculator } from "./calculator.js";

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear");
const deleteButton = document.querySelector("[data-delete]");

const previousOperandOutput = document.querySelector("[data-previous-operand]");
const currentOperandOutput = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandOutput, currentOperandOutput);

numberButtons.forEach((button) =>
	button.addEventListener("click", () => {
		calculator.appendNumber(button.innerText);
	})
);

operationButtons.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.chooseOperation(button.innerText);
		calculator.compute();
	});
});

equalsButton.addEventListener("click", () => {
	calculator.compute();
});

allClearButton.addEventListener("click", () => {
	calculator.clear();
});

deleteButton.addEventListener("click", () => {
	calculator.delete();
});
