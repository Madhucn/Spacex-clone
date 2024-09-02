import React from 'react';
import Navbar from './Navbar';

const Falcon9 = () => {
    const hamburgerIcon = "\u2630"; 
  return (<>
  
  <nav className="navbar">
        <ul className="nav-links">
         
          <li className="nav-item">
           <Link to="/falcon9">Falcon 9</Link>
          </li>
          <li className="nav-item">
            <a href="#falconheavy">Falcon Heavy</a>
          </li>
          <li className="nav-item">
            <a href="#dragon">Dragon</a>
          </li>
          <li className="nav-item">
            <a href="#starship">Starship</a>
          </li>
          <li className="nav-item">
            <a href="#humanspaceflight">Human Spaceflight</a>
          </li>
          <li className="nav-item">
            <a href="#rideshare">Rideshare</a>
          </li>
          <li className="nav-item">
            <a href="#starshield">Starshield</a>
          </li>
          <li className="nav-item">
            <a href="#starlink">Starlink</a>
          </li>
          <li className="nav-item">
            <a href="#shop">Shop</a>
          </li>
          <li className="hamburger-menu">{hamburgerIcon}</li>
        </ul>
      </nav>
    <div className='inner-center'>
      <h1>FALCON 9</h1>
      <p>FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT</p>
     
    </div>
    </>
  );
}

export default Falcon9;
