import { Calculator } from "./calculator.js";

export class ScientificCalculator extends Calculator {
	constructor(previousOperandOutput, currentOperandOutput) {
		super(previousOperandOutput, currentOperandOutput);
	}
}
