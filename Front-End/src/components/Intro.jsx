import React, { useState } from "react";
import bullsAndCowsImage from "../../images/bulls_and_cows.png";

const Intro = ({ playerName }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    playerName(name);
  };

  return (
    <><h1>Welcome to Bulls and Cows</h1>
      <img src={bullsAndCowsImage} alt="bulls And Cows Welcome" />
      <form onSubmit={handleSubmit}>
        <label>
          What is your name?
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <p>🔹 The secret number has 4 unique digits.</p>
        <p>
          🔹 If you guess the right number in the right place, you get a bull
        </p>
        <p>
          🔹 If you guess the right number but in the wrong place, you get a
          cow.
        </p>
        
          🔹 You have 3 levels:
          <ul>
            <li>Easy: 25 guesses</li>
            <li>Medium: 10 guesses</li>
            <li>Hard: 5 guesses</li>
          </ul>
          

        <button type="submit">Play</button>
      </form>
    </>
  );
};

export default Intro;
