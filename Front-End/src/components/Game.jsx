import React, { useContext, useEffect } from "react";
import { GameContext} from "./Context/GameContext";
import { generateUniqueDigits, areDigitsUnique } from "./utils";
import Intro from "./Intro";
import LevelSelect from "./Levels";
import PlayComponent from "./PlayComponent";
import Header from "./Header";

const Game = () => {
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

  useEffect(() => {
    if (name) {
      setSecretNumber(generateUniqueDigits());
    }
  }, [name]);

  const handlePlayerNameSubmit = (name) => {
    if (name === "") {
      setName("Player");
    } else {
      setName(name);
    }
  };
  

  return (
    <div className="game-container">
      {!name ? (
        <Intro playerName={handlePlayerNameSubmit} />
      ) : (
        <>
          <Header />
          <h2>Hello, {name}! 👋</h2>
          {!level ? (
            <LevelSelect />
          ) : (
            <PlayComponent/>
          )}
        </>
      )}
    </div>
  );
};

const App = () => (
  
    <Game />

);

export default App;
