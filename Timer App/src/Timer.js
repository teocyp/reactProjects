import React, { useState } from 'react';
import './Timer.css';

const Timer = () => {
  let [timer, setTimer] = useState(0);
  const [intervalID, setIntervalID] = useState();

  const complexIncrease = () => {
    const intervalID = setInterval(() => {
      setTimer((prevTimer) => {
        return prevTimer + 1;
      });
    }, 1000);
    setIntervalID(intervalID);
  };

  const stopTimer = () => {
    clearInterval(intervalID);
    setTimer(0);
  };

  return (
    <div className='Timer'>
      <h1 className='counter'>{timer}</h1>
      <button className='stop' onClick={stopTimer}>
        Stop Timer
      </button>
      <button className='start' onClick={complexIncrease}>
        Start Timer
      </button>
    </div>
  );
};

export default Timer;
