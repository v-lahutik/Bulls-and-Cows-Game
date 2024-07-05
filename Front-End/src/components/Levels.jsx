import { GameContext } from '../Context/GameProvider';
import { useContext } from 'react';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Level() {
  const { chooseLevel, level } = useContext(GameContext);

  const handleLevelChange = (event) => {
    chooseLevel(event.target.value);
  };

  console.log("level:", level);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Level</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={level}
        label="Level"
        onChange={handleLevelChange}
      >
        <MenuItem value="Easy">Easy</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="Hard">Hard</MenuItem>
      </Select>
    </FormControl>
  );
}
