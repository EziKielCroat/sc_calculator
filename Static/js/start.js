import Calculator from './calculator.js';

let calculatorInstance = null;

let onButton = document.querySelector('.start-button');

if(onButton === null) {
    alert("notLoadingOnButton");
} else {
    onButton.addEventListener('click', () => {
        console.log("onButtonTriggered");

        if (calculatorInstance === null) {
            calculatorInstance = new Calculator();
            console.log("Calculator initialized.");
        } else {
            console.log("Calculator instance already exists. Unbinding it now.");
            
            calculatorInstance.cleanup();
            
            calculatorInstance = null;
        }
    });
}
