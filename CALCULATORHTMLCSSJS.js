let displayvalue = "";
let currentOperator = null;
let firstvalue = null;

function updatevalue() {
    document.getElementById("buttonK").textContent = displayvalue;
}

function handlenumber(num) {
    displayvalue += num;
    updatevalue();
}

function handleclear() {
    displayvalue = "";
    firstvalue = null;
    currentOperator = null;
    updatevalue();
}

function handlezero() {
    displayvalue += "0";
    updatevalue();
}

function handledot() {
    if (!displayvalue.includes(".")) {
        if (displayvalue === "") {
            displayvalue = "0.";
        } else {
            displayvalue += ".";
        }
        updatevalue();
    }
}

function firstNumber(op) {
    if (displayvalue === "") {
        alert("ENTER NUMBER FIRST");
        return;
    }
    firstvalue = parseFloat(displayvalue); // fixed casing
    currentOperator = op;
    displayvalue = "";
    updatevalue();
}

function handleEqual() {
    if (firstvalue === null || currentOperator === null || displayvalue === "") {
        alert("Incomplete expression");
        return;
    }
    let secondvalue = parseFloat(displayvalue);
    let result;

    switch (currentOperator) {
        case "+":
            result = firstvalue + secondvalue;
            break;
        case "-":
            result = firstvalue - secondvalue;
            break;
        case "*":
            result = firstvalue * secondvalue;
            break;
        case "/":
            result = secondvalue !== 0 ? firstvalue / secondvalue : "Error";
            break;
        default:
            result = "Error";
    }

    displayvalue = result.toString();
    firstvalue = null;
    currentOperator = null;
    updatevalue();
}
