// ThemeSwitcher.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';
import { Box, Button } from '@mui/material';
import {setText} from './demoSlice'
import { useSelector } from 'react-redux';
const ThemeSwitcher = () => {
  const demoTheme = useSelector((state) => state.demo.text);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  console.log("demoTheme ", demoTheme);
  // console.log("person ", text);
  const handleTextChange = () => {
    dispatch(setText("Text Updated...!")); // Dispatch toggleTheme action
  
  };
  return (
   <Box>
     <Button sx={{my:"auto",height:"20px" ,background:"#c284b2",color:'white'}}  onClick={handleTextChange} >
    Text updated
    </Button>
     <Button sx={{my:"auto",height:"20px" ,background:"#c284b2",color:'white'}}  onClick={handleThemeToggle} >
      Toggle Theme
    </Button>
     <h1>{demoTheme}</h1>
   </Box>
   
   
  );
};

export default ThemeSwitcher;
