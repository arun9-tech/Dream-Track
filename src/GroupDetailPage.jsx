// src/GroupDetailPage.jsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { groupDetails } from './data/courseData';

const GroupDetailPage = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const details = groupDetails[groupId];

  if (!details) return <div>Details not found</div>;

  return (
    <div className="page-container">
      <h1 className="page-title">{details.name}</h1>
      <p className="page-description">{details.details}</p>

      <div className="detail-section">
        <h2>Subjects & Textbooks</h2>
        <div className="subjects-container">
          {details.subjects.map(subject => (
            <div key={subject.name} className="subject-card">
              <h4>{subject.name}</h4>
              <ul>{subject.books.map(book => <li key={book}>{book}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>

      <div className="action-section">
        <Link to={`/uses/${groupId}`} className="cta-button large">
          What is the use of this course?
        </Link>
      </div>
      <button onClick={() => navigate(-1)} className="back-button">← Go Back</button>
    </div>
  );
};
export default GroupDetailPage;