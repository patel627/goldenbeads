import React, { useState } from 'react';
import Draggable from 'react-draggable';

import './Peg.css';

const Peg = ({ color, onStop }) => {
  const colorOffsets = {
    red: 5,
    blue: 55,
    green: 105,
  };
  const [moved, setMoved] = useState(false);
  const [position, setPosition] = useState({x: colorOffsets[color], y: 10 });

  const setInitialPosition = (e) => {
    // setPosition({x: e.clientX, y: e.clientY});
  };

  const handleStopped = (e, data) => {
    // Only call onStop once
    !moved && onStop && onStop();
    setMoved(true);

    const remInPx = parseInt(getComputedStyle(document.documentElement).fontSize);
    const x = Math.round(data.x/(4.3 * remInPx)) * 4.3 * remInPx;
    const y = Math.round(data.y/(4.3 * remInPx)) * 4.3 * remInPx + remInPx;
    console.log(data)
    console.log({x, y})
    setPosition({x, y});
  };

  return (
    <Draggable onStart={setInitialPosition} onStop={handleStopped} position={position}>
      <figure className={`peg peg-${color} ${moved ? 'moved' : ''}`}></figure>
    </Draggable>
  );
};

export default Peg;
