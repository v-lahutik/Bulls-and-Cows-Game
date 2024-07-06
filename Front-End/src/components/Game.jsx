import React, { useState, useEffect } from "react";
import Intro from "./Intro";
import LevelSelect from "./Levels";
import Gameplay from "./Gameplay";
import Header from "./Header";


const Game = () => {
  const [name, setName] = useState("");
  const [secretNumber, setSecretNumber] = useState("");
  const [guess, setGuess] = useState("");
  const [bulls, setBulls] = useState(0);
  const [cows, setCows] = useState(0);
  const [guessAmount, setGuessAmount] = useState(0);
  const [level, setLevel] = useState("");
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);
  const [playAgain, setPlayAgain] = useState(false);
  const [gamesCounter, setGamesCounter] = useState(0);

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

  useEffect(() => {
    if (name) {
      setSecretNumber(generateUniqueDigits());
    }
  }, [name]);

  const generateUniqueDigits = () => {
    let digits = "";
    while (digits.length < 4) {
      let randomDigit = Math.floor(Math.random() * 10).toString();
      if (!digits.includes(randomDigit)) {
        digits += randomDigit;
      }
    }
    return digits;
  };

  const areDigitsUnique = (number) => {
    const numString = number.toString();
    const uniqueDigits = numString
      .split("")
      .filter((digit, index, array) => array.indexOf(digit) === index);
    return uniqueDigits.length === 4;
  };

  const onlyDigits = (str) => {
    var regex = /^\d+$/;
    return regex.test(str);
  };

  const handlePlayerNameSubmit = (name) => {
    if (name === "") {
      setName("Player");
    } else {
      setName(name);
    }
  };

  const handleLevelSelect = (level) => {
    if (level === "E") {
      setGuessAmount(25);
      setLevel("EASY");
    } else if (level === "M") {
      setGuessAmount(10);
      setLevel("MEDIUM");
    } else if (level === "H") {
      setGuessAmount(5);
      setLevel("HARD");
    }
  };

  const handleGuess = () => {
    if (!onlyDigits(guess)) {
      setMessage(`⛔ Hey! It’s numbers only 🤦`);
    } else if (guess.length !== 4) {
      setMessage(`⛔ Please enter exactly 4 numbers! 🙎 🙎 `);
    } else if (!areDigitsUnique(guess)) {
      setMessage(`⛔ No repeating numbers please 🙅`);
    } else {
      setCounter(counter + 1);
      let bulls = 0;
      let cows = 0;
      for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secretNumber[i]) {
          bulls++;
        } else if (secretNumber.includes(guess[i])) {
          cows++;
        }
      }
      setBulls(bulls);
      setCows(cows);

      let randomMessage;
      if (bulls === 0 && cows === 0) {
        randomMessage =
          messageNotClose[Math.floor(Math.random() * messageNotClose.length)];
      } else {
        randomMessage =
          messageClose[Math.floor(Math.random() * messageClose.length)];
      }
      setMessage(randomMessage);

      if (guess === secretNumber) {
        setMessage(
          `Congratulations ${name}!!! 👏👏👏 You guessed the right number. 🏆`
        );
        setPlayAgain(true);
      } else if (counter === guessAmount) {
        setMessage(
          `😢 Sorry ${name}, you have run out of guesses. The secret number was: ✨ ${secretNumber} ✨`
        );
        setPlayAgain(true);
      }
    }
  };

  const handlePlayAgain = () => {
    setGamesCounter(gamesCounter + 1);
    setCounter(0);
    setGuess("");
    setSecretNumber(generateUniqueDigits());
    setPlayAgain(false);
    setMessage("");
  };

  return (
    <>
    
    <div className="game-container">
      {!name ? (
        <Intro playerName={handlePlayerNameSubmit} />
      ) : (
        <>
        <Header />
        <h1>🎯 Bulls 🐂 and Cows 🐄 Game</h1>
          <h2>Hello, {name}! 👋</h2>
          <div className="game-info">
            
            <p>🔹 The secret number has 4 unique digits.</p>
            <p>🔹 If you guess the right number in the right place, you get a bull.</p>
            <p>🔹 If you guess the right number but in the wrong place, you get a cow.</p>
            <p>🔹 Let's start guessing!</p>
          </div>
          {!level ? (
            <LevelSelect onSelect={handleLevelSelect} />
          ) : (
            <Gameplay
              level={level}
              guessAmount={guessAmount}
              guess={guess}
              setGuess={setGuess}
              counter={counter}
              bulls={bulls}
              cows={cows}
              message={message}
              playAgain={playAgain}
              onGuess={handleGuess}
              onPlayAgain={handlePlayAgain}
            />
          )}
        </>
      )}
    </div></>
  );
};

export default Game;

