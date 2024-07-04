import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Level() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Level</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Level"
        onChange={handleChange}
      >
        
        <MenuItem value={10}>Easy</MenuItem>
        <MenuItem value={20}>Medium</MenuItem>
        <MenuItem value={30}>Hard</MenuItem>
      </Select>
    </FormControl>
  );
}
