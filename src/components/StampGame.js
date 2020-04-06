import React, { useState } from 'react';
import './StampGame.css';

import Material from './Material';
import Piece from './Piece';

import stamp1 from '../images/stamp-game/1.png';
import stamp10 from '../images/stamp-game/10.png';
import stamp100 from '../images/stamp-game/100.png';
import stamp1000 from '../images/stamp-game/1000.png';




const StampGame = () => {

  const [unitStamps, setUnitStamps] = useState(1);
  const [tenStamps, setTenStamps] = useState(1);
  const [hundredStamps, setHundredStamps] = useState(1);
  const [thousandStamps, setThousandStamps] = useState(1);

  const renderUnitStamps = () => {
    let stamps = [];
    for (let i = 0; i < unitStamps; i++) {
      stamps.push(
        <Piece
          src={stamp1}
          name="1"
          key={i} 
          onStop={() => setUnitStamps(unitStamps + 1)}
        />
      );
    }
    return stamps;
  };

  const renderTenStamps = () => {
    let stamps = [];
    for (let i = 0; i < tenStamps; i++) {
      stamps.push(
        <Piece
          src={stamp10}
          name="10"
          key={i} 
          onStop={() => setTenStamps(tenStamps + 1)}
        />
      );
    }
    return stamps;
  };

  const renderHundredStamps = () => {
    let stamps = [];
    for (let i = 0; i < hundredStamps; i++) {
      stamps.push(
        <Piece
          src={stamp100}
          name="100"
          key={i} 
          onStop={() => setHundredStamps(hundredStamps + 1)}
        />
      );
    }
    return stamps;
  };

  const renderThousandStamps = () => {
    let stamps = [];
    for (let i = 0; i < thousandStamps; i++) {
      stamps.push(
        <Piece
          src={stamp1000}
          name="1000"
          key={i} 
          onStop={(e) => {
            console.log(e);
            setThousandStamps(thousandStamps + 1)
          }}
        />
      );
    }
    return stamps;
  };

  return (
    <Material>
      <div id="stamp-game">
        <div id="stamp-game__box">
          <div className="stamp-game__stamps">
            {renderThousandStamps()}
          </div>
          <div className="stamp-game__stamps">
            {renderHundredStamps()}
          </div>
          <div className="stamp-game__stamps">
            {renderTenStamps()}
          </div>
          <div className="stamp-game__stamps">
            {renderUnitStamps()}
          </div>
        </div>
      </div>
    </Material>
  );
};

export default StampGame;

