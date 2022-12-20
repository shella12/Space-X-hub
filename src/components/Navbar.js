import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet-logo.png';

function Navbar() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo-img" />
        <h1>Space Travelers Hub</h1>
      </div>
      <nav>
        <NavLink to="/" activeClassName="active">
          Rockets
        </NavLink>
        <NavLink to="/Missions" activeClassName="active">
          Missions
        </NavLink>
        <NavLink to="/Dragons" activeClassName="active">
          Dragons
        </NavLink>
        <NavLink to="/MyProfile" activeClassName="active">
          MyProfile
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
