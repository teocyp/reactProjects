import React, { useState, useEffect } from 'react';
import './WindowWidth.css';

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleWidth = () => {
    setWidth(window.innerWidth);
  };

  const handleHeight = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleHeight);
  }, []);

  return (
    <>
      <h1>
        Width of the windows is <span className='width'>{width}</span> px.
      </h1>
      <h1>
        Height of the windows is <span className='height'>{height}</span> px.
      </h1>
    </>
  );
}

export default WindowWidth;
