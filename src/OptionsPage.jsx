// src/OptionsPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courseDatabase } from './data/courseData';

const OptionsPage = () => {
  const { level } = useParams(); // 'after10th' or 'afterInter'
  const pathways = courseDatabase[level] || [];
  const title = level === 'after10th' ? 'After 10th' : 'After Intermediate';

  return (
    <div className="page-container">
      <h1 className="page-title">{title}: Choose Your Path</h1>
      <div className="list-container">
        {pathways.map(path => (
          <Link key={path.id} to={`/pathway/${path.id}`} className="list-item-card">
            <h3>{path.name}</h3>
            <p>{path.description}</p>
          </Link>
        ))}
      </div>
      <Link to="/home" className="back-button">← Back to Home</Link>
    </div>
  );
};
export default OptionsPage;