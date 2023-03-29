"use strict";
const number1 = document.getElementById("num1");
const printButton = document.getElementById("printbtn");
const printValue = document.getElementById("enteredNumber");
function printEnteredValue() {
    const num1 = parseFloat(number1.value);
    printValue.textContent = num1.toString();
}
printButton.addEventListener("click", printEnteredValue);
