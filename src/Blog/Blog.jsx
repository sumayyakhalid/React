import React from 'react'
import { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
const Blog = () => {
    const[blogs,setblog]=useState([]);
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
            <h1>Blog App</h1>
            <div className='cards_div'>
              {blogs.map(blog => (
               

                    <div class="card" key={blog.id}>
                     <Link to={`/blog/${blog.id}`}>
                  
                        <img src="https://miro.medium.com/v2/resize:fit:1024/1*yBt65HhmARbqZDDJ1McFDg.png" alt="Avatar" style={{width:'100%'}}/>
                        <div class="container">
                        <p>
                                    id:
                                    {blog.id}
                                </p>
                                <p>
                                    Title:
                                    {blog.title}
                                </p>
                                <p>
                                    Description:
                                    {blog.description}
                                </p>
                        </div>
                      </Link>
                   </div>
                 
        ))}
        </div>
     
    </div>
  )
}

export default Blog
