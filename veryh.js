//VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"
alert("this calculator is based on prompts.");
let firstNum = prompt("pick a number from 0-9");
let selectedOperator = prompt("select one of the operators: + - * /");
let secondNum = prompt("select your second Number 0-9");

if (selectedOperator == "+") {
    
    function add(firstNum, secondNum) {
        console.log(firstNum + secondNum);
    };
    add(Number(firstNum), Number(secondNum));

}

// function subtract(bobby, dan) {
//     console.log(bobby - dan);
// };

// function multiply(water, bottle) {
//     console.log(water * bottle);
// };

// function divide(java, script) {
//     console.log(java / script);
// };