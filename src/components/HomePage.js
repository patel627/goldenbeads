import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';


const HomePage = () => {
  return (
    <div id="home-page">
      <h1>Montessori Tools</h1>
      <p>Welcome to Montessori Tools! This site was created to support teachers and students during the COVID-19 pandemic, but I hope it will continue to be a useful tool in the future. So far, the following interactive Montessori materials have been created.</p>
      <section className="materials">
        <Link className="material" to="/peg-board">
          <div className="material__caption">
            Peg Board
          </div>
        </Link>
        <Link className="material" to="/stamp-game">
          <div className="material__caption">
            Stamp Game
          </div>
        </Link>
      </section>
      <p>
        Click the links above to use the materials! All of this is developed in my limited, spare time. If you use these digital materials and want to support their development, please <a href="https://www.buymeacoffee.com/rnevius" target="_blank" rel="noopener noreferrer">buy me a coffee here</a>. <span role="img" aria-label="coffee">☕️</span>
      </p>
      <p>Thanks for visiting,<br /><span className="signature">Ryan Nevius</span></p>
    </div>
  );
};

export default HomePage;
