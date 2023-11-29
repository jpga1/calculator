const buttons = document.querySelectorAll('button')
const outputDisplay = document.querySelector('.output')


buttons.forEach(button => {
    if(button.innerText != document.querySelector('.clear-button').innerText && button.innerText != document.querySelector('.equals-button').innerText)
        button.addEventListener('click', () => {
            outputDisplay.append(button.innerText)
        })
})