import { createContext, useState } from "react";
import { areDigitsUnique, generateUniqueDigits, onlyDigits } from "../utils";

const GameContext = createContext(null);

function GameProvider({ children }) {
  const [name, setName] = useState("");
  const [secretNumber, setSecretNumber] = useState("");
  const [guess, setGuess] = useState("");
  const [bulls, setBulls] = useState(0);
  const [cows, setCows] = useState(0);
  const [guessAmount, setGuessAmount] = useState(0);
  const [level, setLevel] = useState("");
  const [message, setMessage] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [counter, setCounter] = useState(0);
  const [playAgain, setPlayAgain] = useState(false);
  const [gamesCounter, setGamesCounter] = useState(0);

  //for testing purposes
  console.log("secret number", secretNumber)
  // console.log(
  //   "Game State:",
  //   "\nsecret number:",
  //   secretNumber,
  //   "\nguess:",
  //   guess,
  //   "\nbulls:",
  //   bulls,
  //   "\ncows:",
  //   cows,
  //   "\nguessAmount:",
  //   guessAmount,
  //   "\ncounter:",
  //   counter,
  //   "\nplayAgain:",
  //   playAgain,
  //   "\nlevel:",
  //   level
  // );

  const handleGuess = () => {
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

    if (guess === secretNumber) {
      setResultMessage(
        `Congratulations ${name}!!!👏👏👏 \nYou guessed the right number. 🏆`
    );
      setPlayAgain(true);
    } else if (counter + 1 === guessAmount) {
      setResultMessage(
        `😢 Sorry ${name}, you have run out of guesses. \nThe secret number was: ✨ ${secretNumber} ✨`
      );
      setPlayAgain(true);
    }
  };

  const onPlayAgain = () => {
    setSecretNumber(generateUniqueDigits());
    setGamesCounter(gamesCounter + 1);
    setCounter(0);
    setGuess("");
    setSecretNumber(generateUniqueDigits());
    setPlayAgain(false);
    setMessage("");
    setLevel("");
    setResultMessage("");
  };

  const value = {
    name,
    setName,
    secretNumber,
    setSecretNumber,
    guess,
    setGuess,
    bulls,
    setBulls,
    cows,
    setCows,
    guessAmount,
    setGuessAmount,
    level,
    setLevel,
    message,
    setMessage,
    counter,
    setCounter,
    playAgain,
    setPlayAgain,
    gamesCounter,
    setGamesCounter,
    handleGuess,
    onPlayAgain,
    setResultMessage,
    resultMessage,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export { GameContext, GameProvider };
