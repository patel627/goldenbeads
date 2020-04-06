import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Piece = ({ name, onStop, src }) => {
  const [moved, setMoved] = useState(false);

  const handleStopped = (e) => {
    // Only call onStop once
    !moved && onStop && onStop();
    setMoved(true);
  };

  return (
    <Draggable onStop={handleStopped}>
      <div className={moved ? "moved" : null}>
        <img src={src} alt={name} />
      </div>
    </Draggable>
  );
};

export default Piece;
