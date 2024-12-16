import React from 'react'
import { useState } from 'react';


import ToDoList from './ToDoList';
function ToDoItem() {
    
    const [tasks, setTasks] = useState([
        "Buy groceries",
        "Walk the dog",
        "Read a book",
        "Finish homework",
        "Clean the house",
      ]);
    
      const addTask = (newTask) => {
        setTasks([...tasks, newTask]); // Add the new task to the state
      };
    
      const deleteTask = (index) => {
        const updatedTasks = tasks.filter((current_value, i) => i !== index); // Remove the task at the given index
        setTasks(updatedTasks);
      };
      // Edit task functionality
  const editTask = (index) => {
    // Prompt user for the new task value
    const updatedText = prompt("Please enter the new task value:");
    
    if (updatedText !== null) { // Check for valid input
    const updatedTasks=[...tasks];
    if(!tasks.includes(updatedText))
    {
     updatedTasks[index]=updatedText;
      setTasks(updatedTasks);
    }
    }
  };
  return (
    <div>
        
      <ToDoList tasks={tasks} addTask={addTask} deleteTask={deleteTask} editTask={editTask}/>
    </div>
  )
}

export default ToDoItem
