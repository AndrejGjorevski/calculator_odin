const operationButtons = document.getElementsByClassName("operation");
const displayContent = document.getElementById("display-content");
const numberButtons = document.getElementsByClassName("number");

function isNumeric(char) {
    return /^[0-9]$/.test(char)
}

function evaluateExpression(expression) {
    let firstNum = "";
    let secondNum = "";
    let operand = "";
    for (let i = 0; i < expression.length - 1; i++) {
        if (isNumeric(expression[i]) && operand === "") {
            firstNum += (expression[i]);
        } else if (isNumeric(expression[i]) && operand !== "") {
            secondNum += (expression[i]);
        } else {
            operand += (expression[i]);
        }
    }

    console.log(Number(firstNum), Number(secondNum), operand)
    let result = operate(Number(firstNum), Number(secondNum), operand);
    displayContent.innerText = result;
}

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("mouseenter", (e) => e.target.style.backgroundColor = "lightyellow");
    operationButtons[i].addEventListener("mouseleave", (e) => e.target.style.backgroundColor = "orange");
    operationButtons[i].addEventListener("click", (e) => {
        const text = displayContent.innerText;
        const lastChar = text[text.length - 1];
        if (isNumeric(lastChar)) {
            displayContent.append(e.currentTarget.querySelector("p").innerText);
        }
        if (e.currentTarget.querySelector("p").innerText === "=" && isNumeric(lastChar)) {
            evaluateExpression(displayContent.innerText)
        }
    })
}

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("mouseenter", (e) => e.target.style.backgroundColor = "white");
    numberButtons[i].addEventListener("mouseleave", (e) => e.target.style.backgroundColor = "lightgrey");
    numberButtons[i].addEventListener("click", (e) => {
        let value = e.currentTarget.querySelector("p").innerText;
        if (value === "C") {
            displayContent.innerText = "";
            return;
        }
        displayContent.append(value);
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