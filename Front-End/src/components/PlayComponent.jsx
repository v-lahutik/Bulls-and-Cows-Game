import React, { useContext } from 'react';
import { GameContext } from './Context/GameContext';
import { areDigitsUnique } from './utils';

const PlayComponent = () => {
  const {
    level,
    guess,
    setGuess,
    bulls,
    cows,
    message,
    playAgain,
    handleGuess,
    onPlayAgain,
    guessAmount,
  } = useContext(GameContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGuess(); 

  };

  return (
    <div className="play">
      <p>
        You’ve chosen level: {level}. You have {guessAmount} guesses. Good luck! 🍀
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          maxLength={4}
        />
        <button type="submit">Submit Guess</button>
      </form>
      <p>You have {} guesses left</p>
      <p>{message}</p>
      <p>
        💎 Hint: {bulls} bulls 🐂 and {cows} cows 🐄
      </p>
      {playAgain && <button onClick={onPlayAgain}>Play Again</button>}
    </div>
  );
};

export default PlayComponent;
