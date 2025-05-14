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
    console.log(expression)

    for (let i = 0; i < expression.length; i++) {
        if (isNumeric(expression[i])) {
            if (operand === "") {
                firstNum += expression[i];
            } else {
                secondNum += expression[i];
            }
        } else if (!isNumeric(expression[i]) && operand === "") {
            if (firstNum !== "" && expression[i] === ".") {
                firstNum += expression[i]
            } else {
                operand = expression[i];
            }
        } else if (!isNumeric(expression[i]) && operand !== "") {
            if (secondNum !== "" && expression[i] === ".") {
                secondNum += expression[i];
            }
        } else {
            return "Error";
        }
    }

    if (firstNum && secondNum && operand) {
        return operate(Number(firstNum), Number(secondNum), operand);
    }

    return "Error";
}

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("mouseenter", (e) => e.target.style.backgroundColor = "lightyellow");
    operationButtons[i].addEventListener("mouseleave", (e) => e.target.style.backgroundColor = "orange");
    operationButtons[i].addEventListener("click", (e) => {
        const current = e.currentTarget.querySelector("p").innerText;
        const display = displayContent.innerText;
        const lastChar = display[display.length - 1];

        if (current === "=") {
            const result = evaluateExpression(display);
            displayContent.innerText = result;
            return;
        }

        if (!isNumeric(lastChar) && !isNumeric(current)) {
            displayContent.innerText = display.slice(0, -1) + current;
            return;
        }

        const hasOperator = /[+\-*/]/.test(display);
        if (hasOperator && isNumeric(lastChar) && !isNumeric(current)) {
            const result = evaluateExpression(display);
            displayContent.innerText = result + current;
            return;
        }

        displayContent.innerText += current;
    });
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