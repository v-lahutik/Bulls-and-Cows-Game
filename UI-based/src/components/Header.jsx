import React from "react";
import Instructions from "./Instructions";
import { generateUniqueDigits } from "./utils";
import { useContext } from "react";
import { GameContext } from "./Context/GameContext";
import { ColorButton } from "./Buttons";
import { AiFillHome } from "react-icons/ai";

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
    setName,
    setResultMessage,
  } = useContext(GameContext);

  const restartHandler = (e) => {
    setSecretNumber(generateUniqueDigits());
    setGamesCounter(gamesCounter + 1);
    setCounter(0);
    setGuess("");
    setPlayAgain(false);
    setMessage("");
    setLevel("");
  };

  const homeHandler = () => {
    setName(""); 
    setResultMessage("");
    setMessage("");
    setPlayAgain(false);
    setGuess("");
    setLevel("");
  };


  return (
    <nav>
      <ColorButton variant="contained" onClick={homeHandler} sx={{ p: 1.3 }}>
        <AiFillHome />
      </ColorButton>

      <Instructions />
      <ColorButton variant="contained" onClick={restartHandler}>
        Restart!
      </ColorButton>
    </nav>
  );
}

export default Header; 
