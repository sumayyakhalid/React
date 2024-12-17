import React from "react";
import { Link } from "react-router";
import ErrorBoundary from "./ErrorBoundary";
const BlogCard = ({ blog }) => {
  return (
    <div>
      <div
        className="card"
        key={blog.id}
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          width: "300px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Link
          to={`/blog/${blog.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img
            src={
              blog.cover_image ||
              "https://miro.medium.com/v2/resize:fit:1024/1*yBt65HhmARbqZDDJ1McFDg.png"
            }
            alt="Avatar"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <div className="container" style={{ padding: "15px" }}>
            <p>
              <strong>ID:</strong> {blog.id}
            </p>
            <p>
              <strong>Title:</strong> {blog.title}
            </p>
            <p>
              <strong>Description:</strong> {blog.description}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
