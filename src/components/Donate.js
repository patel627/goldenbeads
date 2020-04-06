import React, { useEffect, useState } from 'react';
import './Donate.css';

const Donate = () => {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    setTimeout(() => setClosed(true), 6000);
  }, []);

  return (
    <a className={`donate-button ${closed ? '' : 'donate-button-wide'}`} rel="noopener noreferrer" target="_blank" href="https://www.buymeacoffee.com/rnevius">
      <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" />
      <span>Buy me a coffee</span>
    </a>
  );
};

export default Donate;
