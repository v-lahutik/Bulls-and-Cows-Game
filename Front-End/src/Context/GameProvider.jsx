import React, { createContext, useState, useEffect } from "react";

const GameContext = createContext(null);

const GameProvider = ({ children }) => {
  const [secretNumber, setSecretNumber] = useState("");
  const [level, setLevel] = useState("");
  const [guessTimes, setGuessTimes] = useState(0);

  function generateUniqueDigits() {
    let digits = "";
    while (digits.length < 4) {
      let randomDigit = Math.floor(Math.random() * 10).toString();
      if (!digits.includes(randomDigit)) {
        digits += randomDigit;
      }
    }
    return digits;
  }

  const secretNumberHandler = () => {
    setSecretNumber(generateUniqueDigits());
  };

  useEffect(() => {
    secretNumberHandler();
  }, []);

  console.log("secretNumber:", secretNumber);

  function chooseLevel(difficulty) {
    if (difficulty === "Easy") {
      setGuessTimes(25);
      setLevel("Easy");
    } else if (difficulty === "Medium") {
      setGuessTimes(15);
      setLevel("Medium");
    } else if (difficulty === "Hard") {
      setGuessTimes(5);
      setLevel("Hard");
    }
  }

  return (
    <GameContext.Provider value={{ secretNumber, level, guessTimes, chooseLevel }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
