import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0) {
      document.title = `You clicked ${count} times`;
    } else {
      document.title = `Click Counter 0`;
    }
  });

  return (
    <div className='Counter'>
      <h1>
        You have clicked the counter <span>{count}</span> times
      </h1>
      <button className='decrease' onClick={() => setCount(count - 1)}>
        Decrease Count
      </button>
      <button className='reset' onClick={() => setCount((count = 0))}>
        Reset
      </button>
      <button className='increase' onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
};

export default Counter;
