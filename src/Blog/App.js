import React from 'react'
import { ThemeProvider } from "./themeProvider.jsx";
import Blog from "./Blog.jsx";
import BlogDesp from './BlogDesp.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router';


const BlogApp = () => {
  return (
    <div>
      <Router>
         <Routes>
               <Route path="/blog" element={<Blog/>}></Route>
               <Route path="/blog/:id" element={<BlogDesp/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default BlogApp
