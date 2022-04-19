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
else if (selectedOperator == "-") {
     function subtract(firstNum, secondNum) {
         console.log(firstNum - secondNum);
     };
     subtract(Number(firstNum), Number(secondNum));
}

else if (selectedOperator == "*") {
    function multiple(firstNum, secondNum) {
        console.log(firstNum * secondNum);
    };
    multiple(Number(firstNum), Number(secondNum));
} else if (selectedOperator == "/") {
    function divide(firstNum, secondNum) {
        console.log(firstNum / secondNum);
    };
    divide(Number(firstNum), Number(secondNum));
} else{
    alert("please make sure you are selecting the correct numbers and operations")
};