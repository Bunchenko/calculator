import { Calculator } from "./calculator.js";

export class ScientificCalculator extends Calculator {
	_unaryOperators = {
		sin: (a) => Math.sin(a),
		cos: (a) => Math.cos(a),
		tan: (a) => Math.tan(a),
		ctan: (a) => 1 / Math.tan(a),
		"%": (a) => a * 0.01,
		log: (a) => Math.log(a),
	};

	constructor(previousOperandOutput, currentOperandOutput) {
		super(previousOperandOutput, currentOperandOutput);
	}

	_updateDisplayUnary() {
		this.currentOperandOutput.innerText = this.currentOperand;
	}

	chooseUnaryOperator(operator) {
		this.unaryOperator = operator;

		this.computeUnary();
	}

	computeUnary() {
		let result;
		let current = parseFloat(this.currentOperand);
		if (isNaN(current)) return;

		result = this._unaryOperators[this.unaryOperator](current);

		result = this.roundFloatNumber(result);

		this.currentOperand = result;
		this.unaryOperator = undefined;

		this._updateDisplayUnary();
	}
}
