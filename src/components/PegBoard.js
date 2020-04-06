import React, { useState } from 'react';
import './PegBoard.css';

import Material from './Material';
import Peg from './Peg';


const PegBoard = () => {
  const [pegCounts, setPegCounts] = useState({ blue: 1, green: 1, red: 1 });

  const maybeIncrementPegCount = (color) => {
    setPegCounts({...pegCounts, [color]: pegCounts[color] + 1});
  };

  const renderPegs = (color) => {
    let pegs = [];
    for (let i = 0; i < pegCounts[color]; i++) {
      pegs.push(
        <Peg color={color} key={i} onStop={() => maybeIncrementPegCount(color)} />
      );
    }
    return pegs;
  };

  return (
    <Material>
      <div id="peg-board">
        <div id="peg-holder">
          {renderPegs('red')}
          {renderPegs('blue')}
          {renderPegs('green')}
        </div>
      </div>
    </Material>
  );
};

export default PegBoard;
