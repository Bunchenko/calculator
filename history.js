export class History {
	static operationsHistory = [];
	static currentCalculation = "";

	static _pushToHistory() {
		this.operationsHistory.push(this.currentCalculation);
		this.clearCurrentCalculation();
	}

	static clearCurrentCalculation() {
		this.currentCalculation = "";
	}

	static expandCurrentCalculation(content) {
		if (content != undefined) {
			this.currentCalculation += content;
		}
	}

	static appendToDropdown() {
		this._pushToHistory();

		let li = document.createElement("li");
		li.classList.add("dropdown-item");
		li.innerText = this.operationsHistory[this.operationsHistory.length - 1];

		dropdownMenu.append(li);
	}
}

const dropdownMenu = document.querySelector("[data-dropdown]");
