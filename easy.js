//EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.                                                       Example output: “The name Thomas is longer than John by 2 characters”
const firstName = "Keagan";
const secondName = "Thai";

const lengthOfFirstName = firstName.length;
const lengthofSecondName = secondName.length;

console.log(`The name Keagan is longer then Thai by ${lengthOfFirstName - lengthofSecondName} characters.`)