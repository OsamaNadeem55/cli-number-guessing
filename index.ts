#! /usr/bin/env node
import inquirer from  "inquirer";
//// 1) coputer will genrate a random number - Done

/// 2) user input for guessing number        - Done

/// 3) both number compare user input and computer generated number and show result - Done

const randomnumber = Math.floor(Math.random() * 10 + 1);

console.log("Welcome to Number Guessing Game");

const  answer = await inquirer.prompt([
{
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess number between 1-10:",
},

]);

if(answer.userGuessedNumber === randomnumber ) {
  console.log("congratultion ! you guessed right number");
} else {
console.log("you guessed wrong number");
}
