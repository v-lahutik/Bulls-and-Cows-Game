import { createContext, useState } from "react";
import { areDigitsUnique, generateUniqueDigits, onlyDigits} from "../utils";

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
  const [counter, setCounter] = useState(0);
  const [playAgain, setPlayAgain] = useState(false);
  const [gamesCounter, setGamesCounter] = useState(0);

  console.log(
    "secret number:", secretNumber,
    "guess:", guess,
    "bulls:", bulls,
    "cows:", cows,
    "guessAmount:", guessAmount,
    "counter:", counter,
    "playAgain:", playAgain,
    "level:", level
  );

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
      setMessage(
        `Congratulations ${name}!!! 👏👏👏 You guessed the right number. 🏆`
      );
      setPlayAgain(true);
    } else if (counter + 1 === guessAmount) {
      setMessage(
        `😢 Sorry ${name}, you have run out of guesses. The secret number was: ✨ ${secretNumber} ✨`
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
  };

  const value = {
    name, setName,
    secretNumber, setSecretNumber,
    guess, setGuess,
    bulls, setBulls,
    cows, setCows,
    guessAmount, setGuessAmount,
    level, setLevel,
    message, setMessage,
    counter, setCounter,
    playAgain, setPlayAgain,
    gamesCounter, setGamesCounter,
    handleGuess, onPlayAgain
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}

export { GameContext, GameProvider };