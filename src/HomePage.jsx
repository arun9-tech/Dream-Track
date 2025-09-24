// src/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="page-container">
      <section className="hero-section">
        <h1>Welcome to DREAM TRACK</h1>
        <p className="sub-line">Your step-by-step guide to a bright future. Choose your level to begin.</p>
      </section>
      <div className="choice-container">
        <Link to="/options/after10th" className="choice-card">
          <h2>Options After 10th</h2>
          <p>Explore Intermediate, Diploma, and more.</p>
        </Link>
        <Link to="/options/afterInter" className="choice-card">
          <h2>Options After Inter</h2>
          <p>Explore Degree, Professional Courses, and more.</p>
        </Link>
      </div>
    </div>
  );
};
export default HomePage;