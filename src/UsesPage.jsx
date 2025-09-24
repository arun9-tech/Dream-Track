// src/UsesPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { groupDetails } from './data/courseData';

const UsesPage = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const details = groupDetails[groupId];

  if (!details) return <div>Details not found</div>;

  return (
    <div className="page-container">
      <h1 className="page-title">Use of {details.name}</h1>
      
      <div className="detail-section">
        <h2>Key Benefits</h2>
        <ul className="benefits-list">
          {details.benefits.map(benefit => <li key={benefit}>{benefit}</li>)}
        </ul>
      </div>

      <div className="detail-section">
        <h2>Future Job Opportunities</h2>
        <ul className="job-list">
          {details.jobOpportunities.map(job => <li key={job}>{job}</li>)}
        </ul>
      </div>

      <button onClick={() => navigate(-1)} className="back-button">← Go Back</button>
    </div>
  );
};
export default UsesPage;