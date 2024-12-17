import React, { useState, useMemo } from "react";

const ExpensiveCalculation = (num) => {
  console.log("Expensive calculation running...");
  let result = 0;
  for (let i = 0; i <= 1000000000; i++) {
    result += i;
  }
  return num * result;
};

const Memo = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // Use useMemo to memoize the expensive calculation
  const calculatedValue = useMemo(() => ExpensiveCalculation(count), [count]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Expensive Calculation Result: {calculatedValue}</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Memo;