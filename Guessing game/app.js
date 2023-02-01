let max = parseInt(prompt("Enter the maximum number"));
while (!max) {
    max = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter your first guess");
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too High!! Enter a new guess: ");
    } else if (guess < targetNum) {
        guess = prompt("Too Low!! Enter a new guess: ");
    } else {
        guess = prompt(`Guess is ${guess}, which is not higher or lower, please guess a number value: `)
    }
}
if (guess === 'q') {
    document.write("Ok, You Quit!");
} else {
    document.write("<h1>Congrats You Win!</h1>")
    document.write(`<h2>You got it! It took you ${attempts} guesses</h2>`);
}