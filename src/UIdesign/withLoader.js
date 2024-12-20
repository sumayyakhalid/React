import React from "react";

const withLoader = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Loading...</div>; // Display a loading spinner
    }
    return <WrappedComponent {...props} />; // Render the wrapped component
  };
};

export default withLoader;
