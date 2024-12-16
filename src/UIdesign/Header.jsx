import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import {Typography} from '@mui/material';
import {Link} from 'react-router-dom'
export default function ColumnsGrid() {
  return (
    <Grid container spacing={2} sx={{background:'#891583ue',py:4}}>
    <Grid item xs={12} md={6} lg={6} >
      <Box sx={{padding: 2,py:4 ,py:5,m:5}}>
    
      <Typography
      variant="h1"
      sx={{
        fontSize: {
          xs: '2rem', // Small screens
          sm: '3rem', // Medium screens
          md: '4rem', // Larger screens
        },
        fontWeight: 'bold',
        m:3,
      }}
    >
      Online <br/> Shopping Store

    </Typography>
    <p>Mercado Global was launched in 2004 with a mission to transform the lives of Indigenous women, their families, and their communities in Latin America.</p>
    <p >
      <br />
    OUR WORK
    Mercado Global was launched in 2004 with a mission to transform the lives of Indigenous women, their families, and their communities in Latin America.

    Through our nonprofit model, we weave together monetary support, education, and access to the global market, providing the vital tools for women to gain financial independence.
    </p>
    <Link to="/contact">
    <Button sx={{background:'#d219a3',color:'white',m:3}}>
      Shop Now
     </Button> 
    </Link>
     
      </Box>
    </Grid>
    <Grid item xs={12} md={6} lg={6}>
      <Box sx={{padding: 2 }}>
     <img src="https://img.freepik.com/free-vector/online-shopping-concept-landing-page_23-2148203334.jpg?t=st=1733992728~exp=1733996328~hmac=e32f650bdb49e322513318b0d3bf941a9716f2040982b49916873cb990f6fd49&w=740" alt="" height={500} width={500} />
      </Box>
    </Grid>
  </Grid>
   
  );
}
