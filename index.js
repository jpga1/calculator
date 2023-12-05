// Outputs
const currentCalculation = document.querySelector('.current-calculation')
const currentInput = document.querySelector('.current-input')

// Numbers and operation buttons
const numberButtons = document.querySelectorAll('.number-button')
const operationButtons = document.querySelectorAll('.operation-button')

// Clear, equals, and decimal buttons
const clearButton = document.querySelector('.clear-button')
const equalsButton = document.querySelector('.equals-button')

const decimalButton = document.querySelector('.decimal-button')

// Keep track of the current operation and operands
let operation = ""
let operand1 = 0
let operand2 = 0

// Append digits into output when number buttons are pressed
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        currentInput.append(numberButton.innerText)
    })
})

// Move the current input to the current calculations output display and set operation
operationButtons.forEach(operationButton => {
    operationButton.addEventListener('click', () => {
        if(currentInput.innerText != "" && currentCalculation.innerText == ""){
            operand1 = Number(currentInput.innerText)
            operation = operationButton.innerText
            currentCalculation.innerText = currentInput.innerText + ' ' + operation
            currentInput.innerText = ""
        }
        else if(currentInput.innerText != "" && currentCalculation.innerText != ""){
            executeOperation()
            console.log(currentInput.innerText)
            operand1 = Number(currentInput.innerText)
            operation = operationButton.innerText
            currentCalculation.innerText = currentInput.innerText + ' ' + operation
            currentInput.innerText = ""
        }
    })
})

// Reset calculator
clearButton.addEventListener('click', () => {
    currentCalculation.innerText = ""
    currentInput.innerText = ""
    operation = ""
    operand1 = 0
    operand2 = 0
})

// Execute operation and output result
equalsButton.addEventListener('click', executeOperation)

// Append decimal
decimalButton.addEventListener('click', () => {
    if(!currentInput.innerText.includes('.'))
        currentInput.append(decimalButton.innerText)
})

function executeOperation(){
    operand2 = Number(currentInput.innerText)
    switch(operation){
        case '*':
            resetPostCalculation(operand1 * operand2)
            break;
        case '/':
            resetPostCalculation(operand1 / operand2)
            break;
        case '+':
            resetPostCalculation(operand1 + operand2)
            break;
        case '-':
            resetPostCalculation(operand1 - operand2)
            break;
    }
}

// Output results of a calculation and set it as the new operand
function resetPostCalculation(result){
    operand1 = result
    currentInput.innerText = operand1
    currentCalculation.innerText = ""
    operation = ""
    operand2 = 0
}