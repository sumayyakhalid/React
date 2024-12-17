import React from "react";
import Home from "./Home";
import Header from "./Header";
import Card from "./Card";
import { useState } from "react";
import { Box } from "@mui/material";
import Footer from "./Footer";
import { Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
const Callcomponents = ({ logout }) => {
  // products data
  const [arr, setArr] = useState([
    {
      id: "1",
      name: "Girls wear",
      image:
        "https://img.freepik.com/free-vector/girls-trying-new-clothes_1308-111565.jpg?t=st=1733993630~exp=1733997230~hmac=ecbab3645797fda24c2f251875f34ab446c33446e8ad5cbc216caaa1dbf25969&w=740",
      description:
        "Online stores offer convenience, accessibility, and often a wider range of products than bricks-and-mortar stores, allowing customers to browse, place orders, and make payments virtually.",
    },
    {
      id: "2",
      name: "Mens Wear",
      image:
        "https://img.freepik.com/premium-vector/mans-morning-routine-teacher-office-worker-cleaning-formal-jacket-before-work_88272-7598.jpg?w=740",
      description:
        "Online stores offer convenience, accessibility, and often a wider range of products than bricks-and-mortar stores, allowing customers to browse, place orders, and make payments virtually.",
    },
    {
      id: "3",
      name: "Child Wear",
      image:
        "https://img.freepik.com/free-vector/girls-trying-new-clothes_1308-111565.jpg?uid=R115725499&ga=GA1.1.1098915354.1733989343&semt=ais_hybrid",
      description:
        "Online stores offer convenience, accessibility, and often a wider range of products than bricks-and-mortar stores, allowing customers to browse, place orders, and make payments virtually.",
    },
    {
      id: "4",
      name: "Old Wear",
      image:
        "https://img.freepik.com/free-vector/elderly-couple-relaxing-rocking-chairs_1308-166422.jpg?t=st=1733993518~exp=1733997118~hmac=4d5c271589103a293ee7e22f4b926582c2897c11fc58e8e1a7ed6794cc9d3844&w=740",
      description:
        "Online stores offer convenience, accessibility, and often a wider range of products than bricks-and-mortar stores, allowing customers to browse, place orders, and make payments virtually.",
    },
  ]);

  return (
    <div>
      {/* navbar */}
      <Home logout={logout} />
      <Header />
      <ErrorBoundary>
        <Box sx={{ display: "flex", justifyContent: "space-around", my: 4 }}>
          <Card products={arr} />
        </Box>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default Callcomponents;
