// ThemeSwitcher.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';
import { Button } from '@mui/material';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <Button sx={{my:"auto",height:"20px" ,background:"#c284b2",color:'white'}}  onClick={handleThemeToggle} >
      Toggle Theme
    </Button>
  );
};

export default ThemeSwitcher;
