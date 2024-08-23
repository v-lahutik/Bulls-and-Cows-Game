import React, { useState } from "react";
import bullsAndCowsImage from "../../images/bulls_and_cows.png";
import { ColorButton } from "./Buttons";
import { TiArrowRightOutline } from "react-icons/ti";

//Intro page before the game starts
const Intro = ({ playerName }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    playerName(name);
  };

  return (
    <div className="intro-container">
      <div className="intro-left">
        <h1>Welcome to Bulls and Cows</h1>
        
        <img
          className="game-image"
          src={bullsAndCowsImage}
          alt="Bulls and Cows Welcome"
        />
      </div>
      <div className="intro-right">
        <form onSubmit={handleSubmit} className="intro-form">
          <label className="form-label">
            What is your name?
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="name-input"
            />
          </label>
          <div className="game-rules">
            <p>
              
              <TiArrowRightOutline className="arrow" /> The secret number has 4
              unique digits.
            </p>
            <p>
              
              <TiArrowRightOutline className="arrow" /> If you guess the right
              number in the right place, you get a bull. 🐂
            </p>
            <p>
             
              <TiArrowRightOutline className="arrow" /> If you guess the right
              number but in the wrong place, you get a cow. 🐄
            </p>
            <p className="arrow"> There are 3 levels:</p>
            <ul>
              <li>Easy: 25 guesses</li>
              <li>Medium: 10 guesses</li>
              <li>Hard: 5 guesses</li>
            </ul>
          </div>
          <ColorButton variant="contained" type="submit">
            Start Playing!
          </ColorButton>
        </form>
      </div>
    </div>
  );
};

export default Intro;
