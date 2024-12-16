import React from 'react'
import { Box } from '@mui/material'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'
import {Container} from '@mui/material'
import {Typography} from '@mui/material'
import { Navigate, useNavigate } from 'react-router'
import { useState } from 'react'
const Login = ({login}) => {
    const navigate=useNavigate();
    const[email,setemail]=useState("")
    const[pass,setpass]=useState("")
     // Check if the user is already authenticated
    
    const handleClick=(e)=>{
        e.preventDefault();
        
      if(pass==='123' && email==="sumayya123@gmail.com")
      {
        login();
        navigate('/callcomponent')
      }
      
    }
  return (
    <div>
     <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "#f5f5f5",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
          Login
        </Typography>
        <TextField
          label="Email"
          id="email"
          type="email"
          value={email}
          onChange={(e)=>
            setemail(e.target.value)
          }
          name="email"
          required
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          value={pass}
          onChange={(e)=>
            setpass(e.target.value)
          }
          name="password"
          required
          fullWidth
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          onClick={handleClick}
          sx={{
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#1565c0" },
            py: 1.5,
          }}
        >
          Login
        </Button>
      </Box>
    </Container>
    </div>
  )
}

export default Login
