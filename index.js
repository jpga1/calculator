const outputDisplay = document.querySelector('.output')
const currentCalculation = document.querySelector('.current-calculation')
const currentInput = document.querySelector('.current-input')

const numberButtons = document.querySelectorAll('.number-button')
const operationButtons = document.querySelectorAll('.operation-button')

const clearButton = document.querySelector('.clear-button')
const equalsButton = document.querySelector('.equals-button')

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        outputDisplay.append(numberButton.innerText)
    })
})

operationButtons.forEach(operationButton => {
    operationButton.addEventListener('click', () => {
        currentCalculation.innerText = currentInput.innerText + ' ' + operationButton.innerText
        
        currentInput.innerText = ""
    })
})