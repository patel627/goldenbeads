import React from 'react';
import { Link } from 'react-router-dom';

import './Material.css';


const Material = ({ children }) => (
  <>
    <div id="controls">
      <a id="reset-button" href={window.location.href}> &nbsp; </a>
    </div>
    <div id="material">
      { children }
    </div>
  </>
);

export default Material;
