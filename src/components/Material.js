import React from 'react';
import { Link } from 'react-router-dom';
import Donate from './Donate';

import './Material.css';


const Material = ({ children }) => (
  <>
    <Donate />
    <div id="controls">
      <Link id="home-button" to="/" />
      <a id="reset-button" href={window.location.href}> &nbsp; </a>
    </div>
    <div id="material">
      { children }
    </div>
  </>
);

export default Material;
