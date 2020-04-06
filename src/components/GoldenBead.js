import React, { useState } from 'react';
import './GoldenBead.css';

import Material from './Material';
import Piece from './Piece';

import bead1 from '../images/golden-bead/one.png';
import bead10 from '../images/golden-bead/ten.png';
import bead100 from '../images/golden-bead/hundred.png';
import bead1000 from '../images/golden-bead/thousand.png';




const GoldenBead = () => {

  const [unitBeads, setUnitBeads] = useState(1);
  const [tenBeads, setTenBeads] = useState(1);
  const [hundredBeads, setHundredBeads] = useState(1);
  const [thousandBeads, setThousandBeads] = useState(1);

  const renderUnitBeads = () => {
    let beads = [];
    for (let i = 0; i < unitBeads; i++) {
      beads.push(
        <Piece
          src={bead1}
          name="1"
          key={i} 
          onStop={() => setUnitBeads(unitBeads + 1)}
        />
      );
    }
    return beads;
  };

  const renderTenBeads = () => {
    let beads = [];
    for (let i = 0; i < tenBeads; i++) {
      beads.push(
        <Piece
          src={bead10}
          name="10"
          key={i} 
          onStop={() => setTenBeads(tenBeads + 1)}
        />
      );
    }
    return beads;
  };

  const renderHundredBeads = () => {
    let beads = [];
    for (let i = 0; i < hundredBeads; i++) {
      beads.push(
        <Piece
          src={bead100}
          name="100"
          key={i} 
          onStop={() => setHundredBeads(hundredBeads + 1)}
        />
      );
    }
    return beads;
  };

  const renderThousandBeads = () => {
    let beads = [];
    for (let i = 0; i < thousandBeads; i++) {
      beads.push(
        <Piece
          src={bead1000}
          name="1000"
          key={i} 
          onStop={(e) => {
            console.log(e);
            setThousandBeads(thousandBeads + 1)
          }}
        />
      );
    }
    return beads;
  };

  const getNumber = () => {
    var num = (thousandBeads-1)*1000+(hundredBeads-1)*100+(tenBeads-1)*10+(unitBeads-1)
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  return (
    <>
    <Material>
      <div id="golden-bead">
        <div id="golden-bead__box">
          <div className="golden-bead__thousand">
            {renderThousandBeads()}
          </div>
          <div className="golden-bead__hundred">
            {renderHundredBeads()}
          </div>
          <div className="golden-bead__ten">
            {renderTenBeads()}
          </div>
          <div className="golden-bead__one">
            {renderUnitBeads()}
          </div>
        </div>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
    <h1 style={{marginTop:'0rem'}}> {getNumber()} </h1>
</div>

    </Material>
    
    </>
  );
};

export default GoldenBead;

