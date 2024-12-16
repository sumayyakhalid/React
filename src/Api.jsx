import React from 'react'
import { useState,useEffect } from 'react'
const Api = () => {
    const[data,setdata]=useState([]);
    const[loading,setLoading]=useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://random-data-api.com/api/v2/users?size=10');
                
                // Check if the response was successful
                if (response.ok) {
                    const result = await response.json();
                    console.log('All users:', result); // Log all user data
                    
                    setdata(result); // Update state
                }
               
            } catch (error) {
                console.error('Error on fetching data:', error); // Handle errors
            }
            finally{
                setLoading(false);
            }
        };

        fetchData(); // Call the fetchData function
    }, []); // Empty dependency array ensures this runs once when the component mounts


  return (
    <div>
        <h1 className="my-5" style={{fontWeight:'bolder'}}>User'S Data</h1>
        <div>
        {loading ? (
                    <p>Loading...</p> // Show loading message while fetching data
                ) : (
            <ul>
                {data.map(user => (
                    <li style={{margin:'10px'}}key={user.id}>
                        <p>
                            Name:
                            {user.first_name}
                            {user.last_name}
                        </p>
                        <p>
                            Email:
                            {user.email}
                        </p>
                    </li>
                ))}
            </ul>
                )}
        </div>
    </div>
  )
}

export default Api
