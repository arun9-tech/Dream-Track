// src/JobNotificationsPage.jsx
import React from 'react';
import { jobListings } from './data/jobData';

const JobNotificationsPage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Latest Job Notifications</h1>
      <div className="job-listings-container">
        {jobListings.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.title}</h3>
            <p className="job-company">{job.company} - <span>{job.location}</span></p>
            <p className="job-description">{job.description}</p>
            <a href={job.link} target="_blank" rel="noopener noreferrer" className="apply-button">
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobNotificationsPage;