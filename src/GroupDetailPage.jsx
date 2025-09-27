import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { groupDetails } from './data/courseData';

const GroupDetailPage = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const details = groupDetails[groupId];

  if (!details) return <div>Details not found</div>;

  // This checks if there are any videos at all for this course
  const hasVideos = details.subjects.some(subject => subject.videos && subject.videos.length > 0);

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
        <Link to={`/uses/${groupId}`} className="cta-button">
          What is the use of this course?
        </Link>
        {/* THIS IS THE CORRECTED LINK. It uses "Link to" to go to a new page inside your app.
        {hasVideos && (
          <Link to={`/videos/${groupId}`} className="cta-button secondary">
            View Class Videos
          </Link>
        )} */}
      </div>

      <button onClick={() => navigate(-1)} className="back-button">← Go Back</button>
    </div>
  );
};
export default GroupDetailPage;