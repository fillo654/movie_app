import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SeletOrder() {
  const [select, setSelect] = React.useState('');

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          label="select"
          onChange={handleChange}
        >
          <MenuItem value={1}>Title (A-Z)</MenuItem>
          <MenuItem value={2}>Title (Z-A)</MenuItem>
          <MenuItem value={3}>Popularity Descening</MenuItem>
          <MenuItem value={4}>Popularity Ascending</MenuItem>
          <MenuItem value={5}>Rating Descening</MenuItem>
          <MenuItem value={6}>Rating Ascending</MenuItem>
          <MenuItem value={7}>Release date Descening</MenuItem>
          <MenuItem value={8}>Release date Ascending</MenuItem>


        </Select>
      </FormControl>
    </Box>
  );
}