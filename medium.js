//MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
let figureUserOut = prompt ("are you using all upper case, lower case or both?")
if (figureUserOut == figureUserOut.toUpperCase()) {
    alert ("Woah relax, no need to get loud.");
    console.log("Your shouting.. relax.");
   }
else if (figureUserOut == figureUserOut.toLowerCase()){
    alert ("the quiet one.. we need to break your spirit to make it stronger");
    console.log("Your whispering.. SPEAK UP.");
   } else {
       alert ("your just a norm.");
       console.log("your talking normallyAZ.. finally.");
   }
//Ima add it to the console.log too but I figured an alert is a better experience.