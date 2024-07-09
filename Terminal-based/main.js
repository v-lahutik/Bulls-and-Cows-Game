const prompt = require("prompt-sync")({ sigint: true });

// Introduction starts here
let name = prompt("What is your name? ");
if (name === "") {
  name = "Player";
}
console.log(`Hello, ${name}! 👋`);

// Generates random number
function generateUniqueDigits() {
  let digits = "";
  for (let i = 0; digits.length < 4; i++) {
    let randomDigit = Math.floor(Math.random() * 10);
    if (!digits.includes(randomDigit)) {
      digits += randomDigit;
    }
  }
  return digits;
}
let secretNumber = generateUniqueDigits();

// Game explanation
console.log(`🎯 Welcome to the Bulls 🐂 and Cows 🐄 Game`);
console.log(`🔹 The secret number has 4 unique digits.`);
console.log(`🔹 If you guess the right number in the right place, you get a bull.`);
console.log(`🔹 If you guess the right number but in the wrong place, you get a cow.`);
console.log(`🔹 Difficulty Level: You can choose a difficulty level:
Easy (E/e): 25 guesses
Medium (M/m): 10 guesses
Hard (H/h): 5 guesses`);
console.log(`🔹 Let's start guessing!`);

// Game difficulty level
let guessAmount;
let level;
function chooseLevel() {
  const difficulty = prompt(`Choose a difficulty level: easy (press E), medium (press M) or hard (press H) `).toLowerCase();
  if (difficulty === "e") {
    guessAmount = 25;
    level = "EASY";
  } else if (difficulty === "m") {
    guessAmount = 10;
    level = "MEDIUM";
  } else if (difficulty === "h") {
    guessAmount = 5;
    level = "HARD";
  } else {
    console.log(`Invalid input. Defaulting to MEDIUM level.`);
    guessAmount = 10;
    level = "MEDIUM";
  }
}

chooseLevel();

console.log(`You’ve chosen level: ${level}. You have ${guessAmount} guesses. Good luck! 🍀`);

// Random messages if player didn't guess any number
const messageNotClose = [
  `🤷 No luck this time! Keep trying!`,
  `🤦 Not even close!`,
  `🤔 Maybe next time!`,
  `😔 You should try a different approach.`,
  `😉 I believe in you! Keep going!`,
  `😐 Not quite, but don't give up!`,
  `👏 Keep pushing! You're getting there!`,
  `🧠 Think outside the box!`,
  `💡 You're sharpening your skills!`,
  `🚀 You're reaching for the stars!`,
];

// Random messages if player guessed some numbers
const messageClose = [
  `🙌 You're on the right track!`,
  `🤩 Don't give up now! You're making progress`,
  `😊 Keep going! You're closer than you think.`,
  `😉 You're getting closer with every guess! Keep it up`,
  `🤓 You've got this! Keep guessing until you conquer!`,
  `🎯 Almost there! Keep aiming!`,
  `💪 Keep pushing! You're almost there!`,
  `🔥 You're heating up! Keep going!`,
  `👍 You're making strides!`,
  `🌟 You're shining brightly!`,
];

// Play the game again function
let repeatGame = false;
let gamesCounter = 0;
function playAgain() {
  let play = prompt(`Do you want to play again? (yes/no) `).toLowerCase();
  if (play === "yes" || play === "y") {
    repeatGame = true;
    counter = 0;
    gamesCounter++;
    secretNumber = generateUniqueDigits();
    // Clear the previous game and play again
    console.clear();
    console.log(`Okay, let's try again! 👊 Times played: ${gamesCounter}`);
    chooseLevel();
  } else {
    repeatGame = false;
  }
}

// Variables for validation and counting
let guess;
let validGuess = false;
let counter = 0;

// Game starts
while (!validGuess || !repeatGame) {
  let valid = false;
  guess = prompt(`Your guess:`);
  // Variables for validation
  // Checks if the guess is 4 digit unique number
  function areDigitsUnique(number) {
    const numString = number.toString();
    const uniqueDigits = numString.split("").filter((digit, index, array) => array.indexOf(digit) === index);
    return uniqueDigits.length === 4;
  }
  const uniqueDigits = areDigitsUnique(guess);
  // Checks if contains only numbers not letters or symbols

  // Regular expression
  function onlyDigits(str) {
    var regex = /^\d+$/;
    return regex.test(str);
  }
  const onlyDigit = onlyDigits(guess);

  // If the guess is 4 digits length
  const fourDigits = guess.length === 4;
  // Validation and messages
  if (!onlyDigit) {
    console.log(`⛔ Hey! It’s numbers only 🤦`);
  } else if (!fourDigits) {
    console.log(`⛔ Please enter exactly 4 numbers! 🙎 🙎 `);
  } else if (!uniqueDigits) {
    console.log(`⛔ No repeating numbers please 🙅`);
  } else {
    counter++;
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === secretNumber[i]) {
        bulls++;
      } else if (secretNumber.includes(guess[i])) {
        cows++;
      }
    }
    console.log(`You have guessed ${counter} out of ${guessAmount} 🙂`);

    // Random messages for the player
    let randomMessage;
    if (bulls === 0 && cows === 0) {
      randomMessage = messageNotClose[Math.floor(Math.random() * messageNotClose.length)];
    } else {
      randomMessage = messageClose[Math.floor(Math.random() * messageClose.length)];
    }
    console.log(randomMessage);
    console.log(`💎 Hint: ${bulls} bulls 🐂 and ${cows} cows 🐄`);

    // If the player has guessed the right number
    if (guess === secretNumber) {
      console.log(`Congratulations ${name}!!! 👏👏👏 You guessed the right number. 🏆`);
      // Ask the player if they want to play again
      playAgain();
      // If the player doesn't want to play again
      if (repeatGame === false) {
        console.log(`Thanks for playing! 👋 Goodbye ${name}!`);
        break;
      }
    }
    // If the player has guessed the maximum times
    if (counter === guessAmount) {
      console.log(`😢 Sorry ${name}, you have run out of guesses. The secret number was: ✨ ${secretNumber} ✨`);
      // Ask the player if they want to play again
      playAgain();
      // If the player doesn't want to play again
      if (repeatGame === false) {
        console.clear();
        console.log(`You have played ${gamesCounter} times`);
        console.log(`Thanks for playing! 👋 Goodbye ${name}!`);
        break;
      }
    }
  }
}
