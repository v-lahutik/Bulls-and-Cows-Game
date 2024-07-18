import React from "react";
import Instructions from "./Instructions";
import { generateUniqueDigits } from "./utils";
import { useContext } from "react";
import { GameContext } from "./Context/GameContext";
import { ColorButton } from "./styledComponents";

function Header() {
  const {
    setSecretNumber,
    setGuess,
    setLevel,
    setMessage,
    setCounter,
    setPlayAgain,
    gamesCounter,
    setGamesCounter,
  } = useContext(GameContext);

  const restartHandler = (e) => {
    setSecretNumber(generateUniqueDigits());
    setGamesCounter(gamesCounter + 1);
    setCounter(0);
    setGuess("");
    setSecretNumber(generateUniqueDigits());
    setPlayAgain(false);
    setMessage("");
    setLevel("");
  };

  return (
    <nav>
      <Instructions />
      <ColorButton variant="contained" onClick={restartHandler}>
        Restart!
      </ColorButton>
    </nav>
  );
}

export default Header;
