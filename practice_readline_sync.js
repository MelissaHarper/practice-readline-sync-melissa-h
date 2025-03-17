const ask = require('readline-sync');

//Practice- 4 Values, Data Types, and Operations

let name = ask.question("Please enter your first name: ");

console.log("Hello, " + name);

let dataType = ask.question("Name one data type used in JavaScript: ");
let operator = ask.question("Enter one mathematical operator that can be used in JavaScript coding: ");
let bool = ask.question("True or false, the output of console.log(\"5\" + \"2\") is 7? ");
let output = ask.questionInt("Using only numbers, what do you think the output of the above code will be? ")
let conversion = ask.question("Does the above equation use conversion? ")


console.log("The data type you chose is " + dataType + ". The operator you chose is " + operator + 
    ". You said the given output for the code provided is " + bool + ". You said the output should be " 
    + output + ". You answered " + conversion + " to the conversion question.");