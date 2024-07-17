import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "./Context/GameContext";
import { areDigitsUnique, generateUniqueDigits, onlyDigits } from "./utils";
import { ColorButton } from "./styledComponents";
import Alert from '@mui/material/Alert';

const PlayComponent = () => {
  const [allGuesses, setAllGuesses] = useState([]);

  const {
    level,
    guess,
    setGuess,
    bulls,
    setBulls,
    cows,
    setCows,
    message,
    setMessage,
    playAgain,
    handleGuess,
    onPlayAgain,
    guessAmount,
    counter,
    setCounter,
    secretNumber,
    name,
  } = useContext(GameContext);

  useEffect(() => {
    if (allGuesses.length > 0 && counter === allGuesses.length) {
      const lastGuess = allGuesses[allGuesses.length - 1];
      setAllGuesses((prevGuesses) => {
        const updatedGuesses = [...prevGuesses];
        updatedGuesses[updatedGuesses.length - 1] = {
          ...lastGuess,
          bulls,
          cows,
        };
        return updatedGuesses;
      });
    }
  }, [bulls, cows, counter]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onlyDigits(guess)) {
      setMessage(` Numbers only! `);
    } else if (guess.length !== 4) {
      setMessage(` Please enter exactly 4 numbers! `);
    } else if (!areDigitsUnique(guess)) {
      setMessage(` No repeating numbers please `);
    } else {
      setCounter(counter + 1);
      handleGuess();
      setAllGuesses((prevGuesses) => [...prevGuesses, { guess, bulls, cows }]);
      setGuess("");
      setMessage("");
    }
  };

  const remainingGuesses = guessAmount - counter;
  return (
    <div className="play">
      <p>
        You’ve chosen level: {level}. You have {guessAmount} guesses. Good luck!
        🍀
      </p>
      <form onSubmit={handleSubmit} className="play-form">
        <input
        className="guess-input"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          maxLength={4}
          disabled={playAgain || counter >= guessAmount}
        />
        <ColorButton
        className="submit-guess-button"
          variant="contained"
          type="submit"
          disabled={playAgain || counter >= guessAmount}
        >
          Submit Guess
        </ColorButton>
      </form>
      <div className="alert-container">
      {message && (
          <Alert severity="error" color="warning">
            {message}
          </Alert>
        )}</div>
  
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                {" "}
                {remainingGuesses} / {guessAmount}
              </th>
              <th>Guess</th>
              <th>Bulls </th>
              <th>Cows </th>
            </tr>
          </thead>
          <tbody>
            {allGuesses.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.guess}</td>
                <td>{entry.bulls}🐂</td>
                <td>{entry.cows}🐄</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {playAgain && (
        <ColorButton variant="contained" onClick={onPlayAgain}
        sx={{marginTop: "50px"}}>
          Play again
        </ColorButton>
      )}
    </div>
  );
};

export default PlayComponent;
