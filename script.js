let displayValue = '';
let operation = '';
let firstNumber = '';
let secondNumber = '';

function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function setOperation(op) {
    operation = op;
    firstNumber = displayValue;
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    operation = '';
    firstNumber = '';
    secondNumber = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    secondNumber = displayValue;
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case '-':
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case '*':
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case '/':
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
    }
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
    operation = '';
    firstNumber = '';
    secondNumber = '';
}
