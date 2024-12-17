import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "../UIdesign/Home";
import Footer from "./Footer";
import { useMemo } from "react";
import { Box, CircularProgress, Pagination } from "@mui/material";

import { lazy } from "react";
const BlogCard = lazy(() => import("./BlogCard.jsx"));

const Blog = () => {
  const [blogs, setblog] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);
  const perpage = 10;

  const fetchdata = async (page) => {
    setloading(true);
    try {
      const response = await fetch(
        `https://dev.to/api/articles?per_page=${perpage}&page=${page}`
      );
      if (response.ok) {
        const data = await response.json();
        setblog(data);
        console.log(data);
      } else {
        console.log(response.status);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchdata(page); // Call fetchdata with page as an argument
    }, 2000);

    return () => clearTimeout(timer);
  }, [page]);

  // Filter blogs based on the search term
  const filteredBlogs = useMemo(() => {
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [blogs, searchTerm]); // Only re-run filtering when blogs or searchTerm changes

  return (
    <div>
      <Home />
      {/* Search Input */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search blogs by title or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "50%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            margin: "auto",
            marginTop: "5px",
          }}
        />
      </div>

      {/* Blog Cards */}
      <Pagination
        count={10} // Total number of pages
        page={page}
        onChange={(event, value) => setpage(value)}
        color="primary"
      />

      <div
        className="cards_div"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        {console.log("Filtering blogs...")}
        <Suspense fallback={<CircularProgress />}>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <p style={{ fontSize: "18px", fontWeight: "500" }}>
              No blogs found matching your search.
            </p>
          )}
        </Suspense>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
