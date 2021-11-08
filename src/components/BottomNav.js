import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import TvIcon from '@mui/icons-material/Tv';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


export default function BottomNav() {
  const [value, setValue] = useState(0);
  const history = useHistory();

  useEffect(() => {

    if (value === 0) history.push("/");
    else if (value === 1) history.push("/movies");
    else if (value === 2) history.push("/series");

  }, [value, history]) 

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, zIndex: 1}}>
      <BottomNavigation sx={{bgcolor: '#eeeeee'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trend" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<LocalMoviesIcon />} />
        <BottomNavigationAction label="Series" icon={<TvIcon />} />
      </BottomNavigation>
    </Box>
  );
}
