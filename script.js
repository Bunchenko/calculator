const input = document.querySelector('input');
const numberButtons = document.querySelectorAll('#digit');
const dotButton = document.querySelector('#dot-button');
const acButton = document.querySelector('#ac-button');
const ceButton = document.querySelector('#ce-button');

let dotWasPressed = false; //flag

function expandInput() {
    input.value += event.target.textContent
}

function appendDigit() {

    if (input.value === '0' && event.target.textContent === '0') {
        return
    }

    expandInput()
}

// function appendDigitKeyboard() {
//     if (event.code.slice(0, 5) !== 'Digit') {return}
//     console.log(event.code)
// }

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

function deleteLastChar() {
    input.value = input.value.slice(0, -1)
}

input.addEventListener('keyup', appendDigitKeyboard)
numberButtons.forEach(button => button.addEventListener('click', appendDigit));
dotButton.addEventListener('click', appendDot);
ceButton.addEventListener('click', deleteLastChar);