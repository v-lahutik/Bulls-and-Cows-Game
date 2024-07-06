import React from "react";

const Gameplay = ({
  level,
  guessAmount,
  guess,
  setGuess,
  counter,
  bulls,
  cows,
  message,
  playAgain,
  onGuess,
  onPlayAgain,
}) => {

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    onGuess()
  }
  return (
    <div className="gameplay">
      <p>You’ve chosen level: {level}. You have {guessAmount} guesses. Good luck! 🍀</p>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        maxLength={4}
      />
      <button onClick={onGuess}>Submit Guess</button>
      </form>
      <p>You have {} guesses left</p>
      <p>{message}</p>
      <p>💎 Hint: {bulls} bulls 🐂 and {cows} cows 🐄</p>
      {playAgain && (
        <button onClick={onPlayAgain}>Play Again</button>
      )}
    </div>
  );
};

export default Gameplay;
