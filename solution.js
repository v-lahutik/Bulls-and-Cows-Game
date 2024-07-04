const prompt = require("prompt-sync")({ sigint: true });
//introduction starts here
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

//for testing
//console.log(" secretNumber:", secretNumber);

//game explanation
console.log(`🎯 Welcome to the Bulls 🐂 and Cows 🐄 Game`);
console.log(`🔹 The secret number has 4 unique digits.`);
console.log(
  `🔹 If you guess the right number in the right place, you get a bull.`
);
console.log(
  `🔹 If you guess the right number but in the wrong place, you get a cow.`
);
console.log(`🔹 You have 8 chances to guess the secret number.`);
console.log(`🔹 Let's start guessing!`);

//random messages if player didn't guess any number
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
//random messages if player guessed some numbers
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

//play the game again function
let repeatGame = false;
function playAgain() {
  let play = prompt(`Do you want to play again? (yes/no) `);
  if (play === "yes") {
    repeatGame = true;
    counter = 0;
    secretNumber = generateUniqueDigits();
    //for testing
    // console.log("NEW secretNumber:", secretNumber);
  } else {
    repeatGame = false;
  }
}

//variables for validation and counting
let guess;
let validGuess = false;
let counter = 0;

//game starts
while (!validGuess || !repeatGame) {
  let valid = false;
  guess = prompt(`Your guess:`);
  // variables for validation
  // Checks if the guess is 4 digit unique number
  function areDigitsUnique(number) {
    const numString = number.toString();
    const uniqueDigits = numString
      .split("")
      .filter((digit, index, array) => array.indexOf(digit) === index);
    return uniqueDigits.length === 4;
  }
  const uniqueDigits = areDigitsUnique(guess);
  //checks if contains only numbers not letters or symbols

  //regular expression
  function onlyDigits(str) {
    var regex = /^\d+$/;
    return regex.test(str);
  }
  const onlyDigit = onlyDigits(guess);

  //if the guess is 4 digits length
  const fourDigits = guess.length === 4;
  //validation and messages
  if (!onlyDigit) {
    console.log(`⛔ Hey! It’s numbers only 🤦`);
  } else if (!fourDigits) {
    console.log(`⛔ Please enter exactly 4 numbers! 🙎 🙎 `);
  } else if (!uniqueDigits) {
    console.log(`⛔ No repeating numbers please 🙅`);
  } else {
    //validGuess = true;
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
    console.log(`You have guessed ${counter} out of 8 🙄`);

    //random messages for the player
    let randomMessage;
    if (bulls === 0 && cows === 0) {
      randomMessage =
        messageNotClose[Math.floor(Math.random() * messageNotClose.length)];
    } else {
      randomMessage =
        messageClose[Math.floor(Math.random() * messageClose.length)];
    }
    console.log(randomMessage);
    console.log(`💎 Hint:${bulls} bulls 🐂 and ${cows} cows 🐄`);

    //if the player has guessed the right number
    if (guess === secretNumber) {
      console.log(
        `Congratulations ${name}!!! 👏👏👏 You guessed the right number. 🏆`
      );
      //ask the player if they want to play again
      playAgain();
      //if the player doesn't want to play again
      if (repeatGame === false) {
        console.log(`Thanks for playing! 👋 Goodbye ${name}!`);
        break;
      }
    }
    // if the player has guessed 8 times
    if (counter === 8) {
      console.log(
        `😢 Sorry ${name}, you have run out of guesses. The secret number was: ✨ ${secretNumber} ✨`
      );
      //ask the player if they want to play again
      playAgain();
      //if the player doesn't want to play again
      if (repeatGame === false) {
        console.log(`Thanks for playing! 👋 Goodbye ${name}!`);
        break;
      }
    }
  }
}
