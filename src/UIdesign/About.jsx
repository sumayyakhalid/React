import React from 'react'
import { Box, Typography } from '@mui/material'
import {Grid} from '@mui/material'
import image1 from '../UIdesign/images/image1.png'
import Home from '../UIdesign/Home'
import {Button} from '@mui/material'
import Footer from './Footer'
import {Card,CardMedia,CardContent,CardActionArea} from '@mui/material'
import about1 from '../UIdesign/images/about1.png'
import about2 from '../UIdesign/images/about2.png'
import { useState } from 'react'
import {Link, Outlet} from 'react-router-dom'
const About = () => {
  const [array, setArr] = useState([
    {
      id:'1',
      name:'Our Store',
      color:'radial-gradient(#ce00c1, #823b3b00)',
      image:image1,
      description:'Online stores offer convenience, accessibility, and often a wider range of products than bricks-and-mortar stores, allowing customers to browse, place orders, and make payments virtually.'
    },
    {
      id:'2',
      name:'Our Mission',
      color:'radial-gradient(#c5421d, #823b3b00)',
      image:about1,
      description:'Online stores offer convenience, accessibility, and often a wider range of products than bricks-and-mortar stores, allowing customers to browse, place orders, and make payments virtually.'
      
    },
    {
      id:'3',
      name:'Our Customer',
      color:'radial-gradient(#ce00c1, #823b3b00)',
      image:about2,
      description:'Online stores offer convenience, accessibility, and often a wider range of products than bricks-and-mortar stores, allowing customers to browse, place orders, and make payments virtually.'
      
    },
  

  ]);
  return (
   <div>
    <Home/>
  <Grid container sx={{background:'#891583ue',py:4}}>
    <Grid item xs={12} md={6} lg={6} >
      <Box sx={{padding: 2,py:4 ,py:5,m:5}}>
    
    <h1 class="h1">ABOUT US</h1>
    <p>Mercado Global was launched in 2004 with a mission to transform the lives of Indigenous women, their families, and their communities in Latin America.</p>
    <p >
      <br />
    OUR WORK
    Mercado Global was launched in 2004 with a mission to transform the lives of Indigenous women, their families, and their communities in Latin America.

    Through our nonprofit model, we weave together monetary support, education, and access to the global market, providing the vital tools for women to gain financial independence.
    </p>
     <Button sx={{background:'#d219a3',color:'white',m:3}} >
       Explore Us
     </Button>
     <Outlet/>
      </Box>
    </Grid>
    <Grid item xs={12} md={6} lg={6}>
      <Box sx={{padding: 2 }}>
     <img src={image1} alt="" height={500} width={500} />
      </Box>
    </Grid>
  </Grid>
    
  <Grid container spacing={2} sx={{background:'#891583ue',py:4}}>
    <Grid item xs={12} md={6} lg={6} >
    <Box sx={{padding: 2 }}>
     <img src="https://img.freepik.com/premium-vector/happy-shoppers-celebrate-amazing-deals-with-big-discounts_123891-161021.jpg?w=740" alt="" height={500} width={500}  />
      </Box>
    </Grid>
    <Grid item xs={12} md={6} lg={6}>
      <Box sx={{padding: 2,py:4 ,py:5,m:5}}>
    <p>Mercado Global was launched in 2004 with a mission to transform the lives of Indigenous women, their families, and their communities in Latin America.</p>
    <p >
      <br />
    OUR WORK
    Mercado Global was launched in 2004 with a mission to transform the lives of Indigenous women, their families, and their communities in Latin America.

    Through our nonprofit model, we weave together monetary support, education, and access to the global market, providing the vital tools for women to gain financial independence.
    </p>
     <Button sx={{background:'#d219a3',color:'white',m:3}}>
   Shop Now
     </Button>
      </Box>
    </Grid>
  </Grid>

  {/* About us cards */}
  <Typography variant='h4' sx={{fontWeight:"bolder"}}>Explore Our Products</Typography>
 <Box sx={{display:'flex',flexDirection:"row",justifyContent:'center',alignItems:'center',flexWrap:'wrap',my:5}}>
       {array.map(arr=>(
 <CardActionArea  sx={{mx:4,width:250,background:'radial-gradient(#ce00c1, #823b3b00)',m:2,background:arr.color}}>
 <CardMedia
   component="img"
   height="140"
   image={arr.image}
   alt="Sample Image"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" component="div">
     {arr.name}
   </Typography>
   <Typography variant="body2" color="text.secondary">
    {arr.description}
   </Typography>
 </CardContent>
</CardActionArea>
       ))}
 </Box>
  <Footer/>
   </div>
   
  )
}

export default About