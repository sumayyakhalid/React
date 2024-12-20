import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router';
const BlogDesp = () => {
   const[blog,setBlog]=useState();
   const { id } = useParams();
    useEffect(() => {
        const fetchBlogDetails = async () => {
          try {
            const response = await fetch(`https://dev.to/api/articles/${id}`);
            if (response.ok) {
              const data = await response.json();
              setBlog(data);
              console.log(blog)
            }
          } catch (error) {
            console.error('Error fetching blog details:', error);
          }
        };
        fetchBlogDetails();
      }, [id]);
     
    return (
    <div>
            {/* {console.log("Blog:", blog)} */}
            {/* <p>{blog.description}</p> */}
    
    {!blog ? (
      <p>Loading blog details...</p>
    ) : (
      <div className="blogs_details">
        <h1 style={{margin:'50px' ,fontWeight:'bold'}}>{blog.title}</h1>
        <img src={blog.cover_image} alt={blog.title}  style={{margin:'auto'}} height={800} width={800} className="img-fluid"/>
        <h2  style={{margin:'50px' ,fontWeight:'bold'}}>{blog.description}</h2>
      </div>
    )}
    </div>

  )
}

export default BlogDesp