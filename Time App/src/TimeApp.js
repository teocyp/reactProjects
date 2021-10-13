import React, { useState, useEffect } from 'react';

function TimeApp() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return(<h3>The current time is {time}</h3>);
}

export default TimeApp;