export class Calculator {
	_operators = {
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

	_updateDisplay() {
		this.currentOperandOutput.innerText = this.currentOperand;
		if (this.operator != undefined) {
			this.previousOperandOutput.innerText = `${this.previousOperand} ${this.operator}`;
		} else {
			this.previousOperandOutput.innerText = "";
		}
	}

	clear() {
		this.previousOperand = "";
		this.currentOperand = "";
		this.operator = undefined;

		this._updateDisplay();
	}

	delete() {
		this.currentOperand = this.currentOperand.toString().slice(0, -1);

		this._updateDisplay();
	}

	appendNumber(number) {
		if (number === "." && this.currentOperand.includes(".")) {
			return;
		} else if (number === "." && this.currentOperand === "") {
			this.currentOperand += "0";
		}

		this.currentOperand = this.currentOperand.toString() + number.toString();

		this._updateDisplay();
	}

	chooseOperator(operator) {
		if (!this.currentOperand) return;
		if (this.previousOperand !== "") {
			this.compute();
		}

		this.operator = operator;
		this.previousOperand = this.currentOperand;
		this.currentOperand = "";

		this._updateDisplay();
	}

	compute() {
		let result;
		const current = parseFloat(this.currentOperand);
		const previous = parseFloat(this.previousOperand);
		if (isNaN(current) || isNaN(previous)) return;

		result = this._operators[this.operator](previous, current);

		if (result.toString().includes(".")) {
			result = result.toFixed(3);
		}

		this.currentOperand = result;
		this.operator = undefined;
		this.previousOperand = "";

		this._updateDisplay();
	}
}
