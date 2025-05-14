const operationButtons = document.getElementsByClassName("operation");
for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("mouseenter", (e) => e.target.style.backgroundColor = "lightyellow");
    operationButtons[i].addEventListener("mouseleave", (e) => e.target.style.backgroundColor = "orange");
}

const numberButtons = document.getElementsByClassName("number");
const displayContent = document.getElementById("display-content")
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("mouseenter", (e) => e.target.style.backgroundColor = "white");
    numberButtons[i].addEventListener("mouseleave", (e) => e.target.style.backgroundColor = "lightgrey");
    numberButtons[i].addEventListener("click", (e) => {
        displayContent.append(e.target.querySelector("p").innerText);
    })
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch(operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
    }
}