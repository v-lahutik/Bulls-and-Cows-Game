import { createContext, useState } from "react";
import { areDigitsUnique, generateUniqueDigits} from "../utils";

const GameContext=createContext(null)

function GameProvider({children}) {
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
    )
    const handleGuess = () => {
      if (guess.length !== 4) {
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
        handleGuess
      };

    return (
      <GameContext.Provider value={value}>
        {children}
      </GameContext.Provider>
    );
  }
  export {GameContext, GameProvider}