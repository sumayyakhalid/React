import React from 'react'
import { useState } from 'react';

const Counter = () => {
    //  ---------counter task
  const [counter, setcounter] = useState(0);

  const handleAdd = () => {
    setcounter(counter + 1);
  }

  const handleSubtract = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  }
  return (
    <div>
      {/* ---------counter task */}
      <div class="main">
        <h1>Counter Task</h1>
        <button onClick={handleAdd}>+</button>
        <h2>{counter}</h2>
        <button onClick={handleSubtract}>-</button>
      </div>
    </div>
  )
}

export default Counter
