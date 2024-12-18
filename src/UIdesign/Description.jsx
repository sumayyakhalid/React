import { Box } from "@mui/material";
import React from "react";
import useFetch from "./useFetch";
const Description = () => {
  const [products] = useFetch("https://jsonplaceholder.typicode.com/comments");

  return (
    <div>
      <h1>Categories</h1>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {products.map((product) => (
          <Box
            key={product.id}
            sx={{
              padding: 2,
              border: "1px solid #ccc",
              borderRadius: 4,
              width: "200px",
              textAlign: "center",
            }}
          >
            {console.log("Fetching product:", product)}
            <h4>{product.name}</h4>
            <p>{product.email}</p>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Description;
