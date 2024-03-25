#!/usr/bin/env node
import inquirer from "inquirer";
let generatedNumber = Math.floor(Math.random() * 10);
async function guessNumber() {
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "guessedNumber",
            message: "Type your guess: ",
        },
    ]);
    if (answer.guessedNumber === generatedNumber) {
        console.log(generatedNumber);
        console.log("The number you guessed was correct!");
    }
    else {
        console.log(generatedNumber);
        console.log("The number you guessed was incorrect.");
    }
    const playAgain = await inquirer.prompt([
        {
            type: "confirm",
            name: "playAgain",
            message: "Do you want to play again?",
        },
    ]);
    if (playAgain.playAgain) {
        generatedNumber = Math.floor(Math.random() * 10);
        guessNumber();
    }
}
guessNumber();
