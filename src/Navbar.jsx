// src/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // A simple logout function for now
  const handleLogout = () => {
    alert("You have been logged out.");
    window.location.href = '/login'; // Redirect to login
  };

  return (
    <nav className="navbar">
      <NavLink to="/home" className="nav-logo">DREAM TRACK</NavLink>
      <div className="nav-links">
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/jobs" className="nav-link">Job Notifications</NavLink>
        <button onClick={handleLogout} className="nav-logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;