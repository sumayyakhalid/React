import { Box,Card,Typography,Rating,CardContent } from "@mui/material";
import { useState } from "react";
import React from "react";
import useFetch from "./useFetch";


const Description = () => {
    const no=5;
  const [products] = useFetch(`https://jsonplaceholder.typicode.com/comments?_limit=4`);

  return (
    <div>
      <Typography variant='h4' sx={{fontWeight:"bolder"}}>Reviews</Typography>

      <Box
      sx={{
        display: "flex",
         flexWrap:'wrap',
        justifyContent:"center",
        alignItems: "center",
        my:10
      }}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          sx={{
            margin:'10px',
            maxWidth: 600, // Ensure it doesn't stretch too wide
            padding: 2,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {product.body}
            </Typography>
              <Rating
                value={Math.floor(Math.random() * 5) + 1} // Random star rating for now
                readOnly
              />
        
          </CardContent>
        </Card>
      ))}
    </Box>
    </div>
  );
};

export default Description;
