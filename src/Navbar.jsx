import React from 'react';
import video from "./space.mp4";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const hamburgerIcon = "\u2630";
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#spacex">Space X</a>
          </li>
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

      <div className="scroll">
        <svg width="30px" height="20px" aria-label="more content below">
          <path
            stroke="#ffffff"
            strokeWidth="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
      </div>

      <video autoPlay loop muted objectFit="cover" src={video}></video>
    </>
  );
}

export default Navbar;
