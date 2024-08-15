export default class Calculator {
    #buttonCount = 0;

    constructor() {
        this.buttons = document.querySelectorAll('.calculator .button > button, .calculator .switcher > button');

        this.buttons.forEach(button => {
            console.log("button", button);
            this.#buttonCount++;
        });

        console.log("Calculator initialized with", this.#buttonCount, "buttons."); // Calculator initialized with NaN buttons.
    }

    cleanup() {
        console.log("Calculator cleanup.");
    }
}
