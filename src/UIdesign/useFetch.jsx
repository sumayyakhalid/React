import React from "react";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [products, setproduct] = useState([]);

  useEffect(() => {
      const fetchdata = async () => {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            setproduct(data);
            console.log(data);
          } else {
            console.log(response.status);
          }
        } catch (e) {
          console.log(e);
        }
      };
      fetchdata();
    },
    [url]);

  return [products];
};

export default useFetch;
