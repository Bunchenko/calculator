import { Calculator } from "./calculator.js";
import { ScientificCalculator } from "./scientificCalculator.js";

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const unaryOperationButtons = document.querySelectorAll("[data-unary-operator]");
const scientificCalculatorButton = document.querySelector("[data-scientific-calculator]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear");
const deleteButton = document.querySelector("[data-delete]");

const previousOperandOutput = document.querySelector("[data-previous-operand]");
const currentOperandOutput = document.querySelector("[data-current-operand]");

function toggleStyle() {
	unaryOperationButtons.forEach((button) => button.classList.toggle("d-none"));
}

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

scientificCalculatorButton.addEventListener("click", toggleStyle);
