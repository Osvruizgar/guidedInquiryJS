//VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"
alert("this calculator is based on prompts.");
let firstNum = prompt("pick a number from 0-9");
let selectedOperator = prompt("select one of the operators: + - * /");
let secondNum = prompt("select your second Number 0-9");
let total;

if (selectedOperator == "+") {
    function add(a, b) {
        return (a + b);
    };
    total = add(Number(firstNum), Number(secondNum));
    alert(`${firstNum} + ${secondNum} = ${total}`);
} 
else if (selectedOperator == "-"){
    function subtract(c, d) {
        return (c - d);
    };
    total = subtract(Number(firstNum), Number(secondNum));
    alert (`${firstNum} - ${secondNum} = ${total}`);
} 
else if (selectedOperator == "*") {
    function multiple (e, f) {
        return (e * f);
    }
    total = multiple(Number(firstNum), Number(secondNum));
    alert (`${firstNum} * ${secondNum} = ${total}`);
} 
else if (selectedOperator == "/") {
    function divide (g, h) {
        return (g / h);
    }
    total = divide(Number(firstNum), Number(secondNum));
    alert (`${firstNum} / ${secondNum} = ${total}`);
} else {
    alert("you did something wrong..")
}

// code mentor taught me below

//let total;
// 
// function add(first, second) {
//     return first + second;
// };
// function subtact(first, second) {
//     return first - second;
// };
// function multiple(first, second) {
//     return first * second;
// };
// function divide(first, second) {
//     return first / second;
// };
// if (selectedOperator == "+") {  
//   total = add(Number(firstNum), Number(secondNum));
//   alert(`${firstNum} + ${secondNum} = ${total}`);
// }else if (selectedOperator == "-") {  
//   total = subtract(Number(firstNum), Number(secondNum));
//   alert(`${firstNum} - ${secondNum} = ${total}`);
// }// }else if (selectedOperator == "*") {  
//   total = multiple(Number(firstNum), Number(secondNum));
//   alert(`${firstNum} * ${secondNum} = ${total}`);
// }// }else if (selectedOperator == "/") {  
//   total = divide(Number(firstNum), Number(secondNum));
//   alert(`${firstNum} / ${secondNum} = ${total}`);
// }

//old code below

// else if (selectedOperator == "-") {
//      function subtract(firstNum, secondNum) {
//          console.log(firstNum - secondNum);
//         };
//         subtract(Number(firstNum), Number(secondNum));
//         alert(`${firstNum} - ${secondNum} = ${Number(firstNum) - Number(secondNum)}`);
// }
// else if (selectedOperator == "*") {
//     function multiple(firstNum, secondNum) {
//         console.log(firstNum * secondNum);
//     };
//     multiple(Number(firstNum), Number(secondNum));
//     alert(`${firstNum} * ${secondNum} = ${Number(firstNum) * Number(secondNum)}`);
// } else if (selectedOperator == "/") {
//     function divide(firstNum, secondNum) {
//         console.log(firstNum / secondNum);
//     };
//     divide(Number(firstNum), Number(secondNum));
//     alert(`${firstNum} / ${secondNum} = ${Number(firstNum) / Number(secondNum)}`);
// } else{
//     alert("please make sure you are selecting the correct numbers and operations");
// };
