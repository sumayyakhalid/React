import { CircularProgress, dividerClasses } from "@mui/material";
import React from "react";
import { useState } from "react";
const withLoader = (WrappedComponent) => {
  return (props) => {
  const [loading, setloading] = useState(true);

    setTimeout(() => {
      setloading(false);
    }, 1000);

    return (
        <div>
          {loading?<p><CircularProgress/></p>:<WrappedComponent {...props}  />}
        </div>
    )
    } // Render the wrapped component
  };


export default withLoader;
