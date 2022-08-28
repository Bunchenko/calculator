class Calculator {
	operators = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
		"/": (a, b) => a / b,
		"*": (a, b) => a * b,
	};

	constructor(previousOperandOutput, currentOperandOutput) {
		this.previousOperandOutput = previousOperandOutput;
		this.currentOperandOutput = currentOperandOutput;
		this.clear();
	}

	clear() {
		this.previousOperand = "";
		this.currentOperand = "";
		this.operation = undefined;
	}

	delete() {}

	appendNumber(number) {
		if (number === "0" && this.currentOperand === "0") {
			return;
		} else if (number !== "0" && this.currentOperand === "0") {
			this.currentOperand = "";
		}

		if (number === "." && this.currentOperand.includes(".")) {
			return;
		} else if (number === "." && this.currentOperand === "") {
			this.currentOperand += "0";
		}

		this.currentOperand = this.currentOperand.toString() + number.toString();
	}

	chooseOperation(operation) {
		this.operation = operation;
		this.previousOperand = `${this.currentOperand} ${operation}`;
		this.currentOperand = "";
	}

	compute() {
		let result;
		const current = parseFloat(this.currentOperand);
		const previous = parseFloat(this.previousOperand);
		if (isNaN(current) || isNaN(previous)) return;

		result = this.operators[this.operation](previous, current);

		this.currentOperand = result;
		this.previousOperand = "";
	}

	updateDisplay() {
		this.currentOperandOutput.innerText = this.currentOperand;
		this.previousOperandOutput.innerText = this.previousOperand;
	}
}

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
		calculator.updateDisplay();
	})
);

operationButtons.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.compute(button.innerText);
		calculator.chooseOperation(button.innerText);
		calculator.updateDisplay();
	});
});

allClearButton.addEventListener("click", () => {
	calculator.clear();
	calculator.updateDisplay();
});
