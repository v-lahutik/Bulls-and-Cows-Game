import { useContext } from "react";
import { GameContext } from "./Context/GameContext";

const LevelSelect = () => {
const {setLevel, setGuessAmount}=useContext(GameContext)

  const handleLevelSelect = (level) => {
    if (level === "Easy") {
      setGuessAmount(25);
      setLevel("Easy");
    } else if (level === "Medium") {
      setGuessAmount(10);
      setLevel("Medium");
    } else if (level === "Hard") {
      setGuessAmount(5);
      setLevel("Hard");
    }
  };
  return (
    <div className="difficulty-level">
      <h3>Choose a difficulty level:</h3>
      <button onClick={() => handleLevelSelect("Easy")}>Easy</button>
      <button onClick={() => handleLevelSelect("Medium")}>Medium</button>
      <button onClick={() => handleLevelSelect("Hard")}>Hard</button>
    </div>
  );
};

export default LevelSelect;
