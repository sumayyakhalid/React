import React from 'react'
import Home from '../UIdesign/Home.jsx'
import Footer from '../UIdesign/Footer.jsx'
import { Box } from '@mui/material'
import contact from '../UIdesign/images/contact.png'
import {Typography} from '@mui/material'
import {TextField} from '@mui/material'
import about1 from '../UIdesign/images/about1.png'
const Contact = () => {
  return (
   <div>
    <Home/>
    <Box
        sx={{
            padding: 2,
            background: '#5e3bc478',
            display: 'flex', // Flexbox container
            flexDirection:'column',
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
            margin:10,
            borderRadius:15,

        }}
        >
        <img src={contact} alt="Contact" style={{ width:'60%', height: 'auto' }} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo mollitia error, perspiciatis doloribus, cumque veritatis dolores porro accusamus a ex perferendis quod ea fugiat odio consequuntur ratione, eum pariatur sint?</p>
    </Box>
    <Typography variant='h4' sx={{fontWeight:"bolder"}}>Contact Us</Typography>
     <Box   
         sx={{
            padding: 2,
            margin:4,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexWrap:'wrap',
            borderRadius:15,
            boxShadow:13
        }}>
     <Box>
        <img src={about1} width="500" height="500"alt="" />
     </Box>
     <Box>
      <Box sx={{display:"flex",flexWrap:'wrap',justifyContent:'center',alignItems:"center"}}>
        <h4 sx={{margin:'15'}}>Name:</h4>
        <TextField  label="Enter Your Name"  sx={{margin:'10px'}} />
      </Box>
      <Box sx={{display:"flex",flexWrap:'wrap',justifyContent:'center',alignItems:"center"}}>
        <h4 sx={{margin:'15'}}>Email:</h4>
        <TextField  label="Enter Your Email"  sx={{margin:'10px'}} />
      </Box>
      <Box sx={{display:"flex",flexWrap:'wrap',justifyContent:'center',alignItems:"center"}}>
        <h4 sx={{margin:'15'}}>Phone no:</h4>
        <TextField  label="Enter Your Number"  sx={{margin:'10px'}} />
      </Box>
      <Box sx={{display:"flex",flexWrap:'wrap',justifyContent:'center',alignItems:"center"}}>
        <h4 sx={{margin:'15'}}>Message</h4>
        <TextField  label="Any Querry!"  sx={{margin:'10px'}} />
      </Box>
     </Box>
     </Box>
    <Footer/>
   </div>
  )
}

export default Contact