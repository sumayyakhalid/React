import React, { useState } from 'react';
import { useTheme } from "./themeProvider";

const TodoList = ({ tasks, addTask, deleteTask,editTask }) => {
  const [taskInput, setTaskInput] = useState(''); // State to manage input value
  const isTaskPresent = tasks.includes(taskInput);
  const { toggleTheme, darkMode } = useTheme();

  const handleAddTask = () => {
    if(taskInput!=="" && !isTaskPresent){
        console.log(tasks)
    addTask(taskInput); // Call the addTask function passed from App.js
    setTaskInput(''); // Clear the input field
    }
  };



  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
       <input
        type="checkbox"
        onChange={toggleTheme}
        checked={darkMode}
        // className="inputBox"
      />
      <h1 className="my-5" style={{fontWeight:'bolder'}}>To Do List</h1>
      <div style={{ marginBottom: '20px' }}>
     
        <input
          type="text"
          value={taskInput} // Bind input value to state
          onChange={(e) => setTaskInput(e.target.value)} // Update state on input change
          placeholder="Enter a task"
          className='inputfield'
          style={{
            padding: '10px',
            width: '70%',
            marginRight: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={handleAddTask}
          style={{
            padding: '10px 15px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgb(107 106 106)',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              boxShadow: 'rgba(0, 0, 0, 0.1)',
            }}
          >
            <span>{task}</span>
            <div>
            <button
              onClick={() => deleteTask(index)} // Call deleteTask with the task index
              style={{
                padding: '5px 10px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight:'3px',
              }}
            >
              Delete
            </button>
            <button
                onClick={() => editTask(index)}  // Call EditTask with the task index
              style={{
                padding: '5px 10px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginLeft:'10px !important'
               
              }}
            >
              Edit
            </button>
            </div>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
