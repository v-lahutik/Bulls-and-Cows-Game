import React from "react";

const LevelSelect = ({ onSelect }) => {
  return (
    <div className="difficulty-level">
      <h3>Choose a difficulty level:</h3>
      <button onClick={() => onSelect("E")}>Easy</button>
      <button onClick={() => onSelect("M")}>Medium</button>
      <button onClick={() => onSelect("H")}>Hard</button>
    </div>
  );
};

export default LevelSelect;
