// src/PathwayPage.jsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courseDatabase } from './data/courseData';

const PathwayPage = () => {
  const { pathwayId } = useParams();
  const navigate = useNavigate();
  const allPathways = [...courseDatabase.after10th, ...courseDatabase.afterInter];
  const pathway = allPathways.find(p => p.id === pathwayId);

  if (!pathway) return <div>Pathway not found</div>;

  return (
    <div className="page-container">
      <h1 className="page-title">{pathway.name}: Choose Your Group</h1>
      <div className="list-container">
        {pathway.groups.map(group => (
          <Link key={group.id} to={`/group/${group.id}`} className="list-item-card">
            <h3>{group.name}</h3>
          </Link>
        ))}
      </div>
      <button onClick={() => navigate(-1)} className="back-button">← Go Back</button>
    </div>
  );
};
export default PathwayPage;