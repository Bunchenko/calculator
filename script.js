const input = document.querySelector('input');
const numberButtons = document.querySelectorAll('#number');
const dotButton = document.querySelector('#button')

let dotWasPressed = false; //flag

function expandInput() {
    input.value += event.target.textContent
}

function appendNumber() {

    if (input.value === '0' && event.target.textContent === '0') {
        return
    }

    expandInput()
}

function appendDot() {

    if (input.value === '' && event.target.textContent === '.') {
        dotWasPressed = false
        return
    }

    if (!dotWasPressed) {
        expandInput()
    }

    dotWasPressed = true // changing flag
}

numberButtons.forEach(button => button.addEventListener('click', appendNumber));
dotButton.addEventListener('click', appendDot)