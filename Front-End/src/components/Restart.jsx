import { generateUniqueDigits } from "./utils";
import { useContext } from "react";
import { GameContext } from "./Context/GameContext";

function Restart() {
  const {
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
  } = useContext(GameContext);


    const restartHandler=(e)=>{
      setSecretNumber(generateUniqueDigits())
      setGamesCounter(gamesCounter + 1);
      setCounter(0);
      setGuess("");
      setSecretNumber(generateUniqueDigits());
      setPlayAgain(false);
      setMessage("");
      setLevel("")
    }


  return (
    <button onClick={restartHandler}>Restart</button>
  )
}

export default Restart