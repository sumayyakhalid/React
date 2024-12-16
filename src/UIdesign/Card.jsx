import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom'
import { Outlet } from 'react-router-dom';
export default function ActionAreaCard({products}) {
  console.log("Products:",products)
  return (
    <div>
     <h1 className="h1">PRODUCTS</h1>
     <Button sx={{background:'#d219a3',color:'white',m:3}}  component={Link} to='men'>
       Mens 
     </Button>
  
     <Button sx={{background:'#d219a3',color:'white',m:3}}  component={Link} to='women'>
       wOmen
     </Button>
     <Outlet/>
   <Box sx={{ display: "flex", justifyContent: "center",flexWrap:'wrap',alignItems:'center', my: 4 }}>
  {products.map((product) => (
   
   <CardActionArea sx={{mx:4,width:250}}>
        <CardMedia
          component="img"
          height="140"
          src={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" >
            {product.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
   
    ))}
     </Box>

    </div>
  
  
  );
}
