import { useContext } from "react";
import { GameContext } from "./Context/GameContext";
import { ColorButton } from "./Buttons";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

const LevelSelect = () => {
  const { setLevel, setGuessAmount } = useContext(GameContext);

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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup size="large" aria-label="Large button group">
          <ColorButton
            key="one"
            variant="contained"
            onClick={() => handleLevelSelect("Easy")}
          >
            Easy
          </ColorButton>
          <ColorButton
            key="two"
            variant="contained"
            onClick={() => handleLevelSelect("Medium")}
          >
            Medium
          </ColorButton>
          <ColorButton
            variant="contained"
            onClick={() => handleLevelSelect("Hard")}
          >
            Hard
          </ColorButton>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default LevelSelect;
