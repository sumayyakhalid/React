import React from 'react'
import { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import Home from '../UIdesign/Home'
import { useMemo } from 'react'
const Blog = () => {
    const[blogs,setblog]=useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // State for search input
      
    // Filter blogs based on the search term
    const filteredBlogs = useMemo(() => {
        return blogs.filter(blog =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }, [blogs, searchTerm]); // Only re-run filtering when blogs or searchTerm changes
    
    useEffect(()=>{
       const fetchdata=async ()=>{
        try{
            const response=await fetch('https://dev.to/api/articles')
            if(response.ok){
             const data=await response.json();
             setblog(data);
            console.log(data); 
            }
           else{
             console.log(response.status);
           }

        }
        catch(error){
            console.log(error);
        }
       }
       fetchdata();
    },[])
  return (
  
    <div>
          <Home />
            <h1>Blog App</h1>

      {/* Search Input */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search blogs by title or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
      </div>

      {/* Blog Cards */}
      <div className="cards_div" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
  
      {/* {blog
      .filter(blog => 
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            blog.description.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map(blog => (
            <div className="card" key={blog.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              width: '300px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}>
              <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img 
                  src="https://miro.medium.com/v2/resize:fit:1024/1*yBt65HhmARbqZDDJ1McFDg.png" 
                  alt="Avatar" 
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div className="container" style={{ padding: '15px' }}>
                  <p><strong>ID:</strong> {blog.id}</p>
                  <p><strong>Title:</strong> {blog.title}</p>
                  <p><strong>Description:</strong> {blog.description}</p>
                </div>
              </Link>
            </div>

          ))} */}
          {console.log("Filtering blogs...")}
             {filteredBlogs.length > 0 ? (
          filteredBlogs.map(blog => (
            <div className="card" key={blog.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              width: '300px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}>
              <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img 
                  src="https://miro.medium.com/v2/resize:fit:1024/1*yBt65HhmARbqZDDJ1McFDg.png" 
                  alt="Avatar" 
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div className="container" style={{ padding: '15px' }}>
                  <p><strong>ID:</strong> {blog.id}</p>
                  <p><strong>Title:</strong> {blog.title}</p>
                  <p><strong>Description:</strong> {blog.description}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p style={{ fontSize: '18px', fontWeight: '500' }}>No blogs found matching your search.</p>
        )}
      </div>
     
    </div>
  )
}

export default Blog
