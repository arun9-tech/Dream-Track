// src/CourseDetailPage.jsx
import React, { useState } from 'react'; // Import useState
import { useParams, Link } from 'react-router-dom';
import { courseDatabase } from './data/courseData';

const CourseDetailPage = () => {
  const { groupId } = useParams();
  
  // NEW: State to control visibility of job opportunities
  const [showJobs, setShowJobs] = useState(false);

  // Combine all course groups into one array to search easily
  const allGroups = [
    ...courseDatabase.after10th.flatMap(c => c.groups),
    ...courseDatabase.afterInter.flatMap(c => c.groups)
  ];

  const courseGroup = allGroups.find(g => g.id === groupId);

  if (!courseGroup) {
    return (
      <div className="detail-page-container">
        <h2>Course not found!</h2>
        <Link to="/home" className="back-button">← Go Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="detail-page-container">
      <div className="detail-header">
        <h1>{courseGroup.name}</h1>
        <p>{courseGroup.details}</p>
        <Link to="/home" className="back-button">← Back to All Courses</Link>
      </div>

      {/* Subjects and Textbooks Section - ALWAYS VISIBLE */}
      <div className="detail-section">
        <h2>Subjects & Recommended Textbooks</h2>
        <div className="subjects-container">
          {courseGroup.subjects.map(subject => (
            <div key={subject.name} className="subject-card">
              <h4>{subject.name}</h4>
              <ul>
                {subject.books.map(book => <li key={book}>{book}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Job Opportunities Section - HIDDEN BY DEFAULT */}
      <div className="detail-section">
        <h2>Career Paths & Job Opportunities</h2>
        
        {/* The button to show/hide the job list */}
        <button 
          className="toggle-section-button" 
          onClick={() => setShowJobs(!showJobs)}
        >
          {showJobs ? 'Hide Job Opportunities' : 'Show Job Opportunities'}
        </button>

        {/* The job list is only rendered if showJobs is true */}
        {showJobs && (
          <ul className="job-list">
            {courseGroup.jobOpportunities.map(job => (
              <li key={job}>{job}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CourseDetailPage;