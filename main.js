import { Calculator } from "./calculator.js";
import { ScientificCalculator } from "./scientificCalculator.js";
import { History } from "./history.js";

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

let calculator = new ScientificCalculator(previousOperandOutput, currentOperandOutput);

numberButtons.forEach((button) =>
	button.addEventListener("click", () => {
		calculator.appendNumber(button.innerText);
	})
);

operationButtons.forEach((button) => {
	button.addEventListener("click", () => {
		History.expandCurrentCalculation(calculator.currentOperand);

		calculator.chooseOperator(button.innerText);
		if (!calculator.currentOperand) {
			History.expandCurrentCalculation(calculator.operator);
		}

		calculator.compute();
	});
});

equalsButton.addEventListener("click", () => {
	if (calculator.currentOperand && calculator.previousOperand) {
		History.expandCurrentCalculation(calculator.currentOperand);
		History.expandCurrentCalculation(equalsButton.innerText);
		calculator.compute();
		History.expandCurrentCalculation(calculator.currentOperand);
		History.appendToDropdown();
	}
});

allClearButton.addEventListener("click", () => {
	calculator.clear();
	History.clearCurrentCalculation();
});

deleteButton.addEventListener("click", () => {
	calculator.delete();
});

scientificCalculatorButton.addEventListener("click", () => {
	toggleStyle();
});

unaryOperationButtons.forEach((button) =>
	button.addEventListener("click", () => {
		calculator.chooseUnaryOperator(button.innerText);
	})
);
