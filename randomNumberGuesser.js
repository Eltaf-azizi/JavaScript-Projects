const prompt = require("prompt-sync")();

const target = Math.rpund(Math.random() * 100);

let guesses = 0;

    while(True){
    guesses++;

    const guess = Number(prompt("Guess the number (0-100): "));

    if (guess > target) {
        console.log("Your guess is too high.");
    }

    else if (guess < target) {
        console.log("Your guess is too low.");
    }


    console.log("You guessed it!")
    break;

}
console.log("You guessed", guesses, " time")