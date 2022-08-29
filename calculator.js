export class Calculator {
	#operators = {
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

	#updateDisplay() {
		this.currentOperandOutput.innerText = this.currentOperand;
		if (this.operation != undefined) {
			this.previousOperandOutput.innerText = `${this.previousOperand} ${this.operation}`;
		} else {
			this.previousOperandOutput.innerText = "";
		}
	}

	clear() {
		this.previousOperand = "";
		this.currentOperand = "";
		this.operation = undefined;

		this.#updateDisplay();
	}

	delete() {
		this.currentOperand = this.currentOperand.toString().slice(0, -1);

		this.#updateDisplay();
	}

	appendNumber(number) {
		if (number === "." && this.currentOperand.includes(".")) {
			return;
		} else if (number === "." && this.currentOperand === "") {
			this.currentOperand += "0";
		}

		this.currentOperand = this.currentOperand.toString() + number.toString();

		this.#updateDisplay();
	}

	chooseOperation(operation) {
		if (!this.currentOperand) return;
		if (this.previousOperand !== "") {
			this.compute();
		}

		this.operation = operation;
		this.previousOperand = this.currentOperand;
		this.currentOperand = "";

		this.#updateDisplay();
	}

	compute() {
		let result;
		const current = parseFloat(this.currentOperand);
		const previous = parseFloat(this.previousOperand);
		if (isNaN(current) || isNaN(previous)) return;

		result = this.#operators[this.operation](previous, current);

		if (result.toString().includes(".")) {
			result = result.toFixed(3);
		}

		this.currentOperand = result;
		this.operation = undefined;
		this.previousOperand = "";

		this.#updateDisplay();
	}
}
