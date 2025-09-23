import React, { useState } from 'react';

// This is the component for displaying course options
const CourseResults = ({ title, courses, onBack }) => {
  // ... (This component remains the same, no changes needed here)
  return (
    <div className="results-page">
      <div className="results-header">
        <h2>{title}</h2>
        <button onClick={onBack} className="back-button">← Go Back</button>
      </div>
      <div className="course-card-container">
        {courses.map((course) => (
          <div key={course.name} className="course-card">
            <h3>{course.name}</h3>
            <p><strong>Use:</strong> {course.use}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main HomePage Component
const HomePage = () => {
  const [currentView, setCurrentView] = useState('home');

  const after10thCourses = [
    { name: 'Intermediate (MPC, BiPC, etc.)', use: 'Builds a strong academic foundation for professional degrees like Engineering, Medicine, and B.Com.' },
    { name: 'Polytechnic / Diploma', use: 'Provides job-oriented technical skills for faster entry into roles like Junior Engineer in Civil, Mechanical, or IT fields.' },
    { name: 'ITI (Industrial Training)', use: 'Focuses on practical, trade-specific skills for immediate employment as an electrician, fitter, welder, or mechanic.' },
    { name: 'Paramedical Courses', use: 'Prepares you for entry-level jobs in the healthcare sector like lab technician, medical imaging assistant, etc.' },
  ];

  const afterInterCourses = [
    { name: 'Degree (B.Tech, B.Sc, B.Com)', use: 'Allows deep specialization in a chosen field, opening doors to a wide range of graduate-level jobs and higher studies (Masters, PhD).' },
    { name: 'Professional Courses (CA, CMA)', use: 'Highly specialized training for prestigious careers in finance, accounting, and corporate law.' },
    { name: 'Integrated Degree (B.Tech + M.Tech)', use: 'A 5-year combined course that provides deeper knowledge and is ideal for careers in research and development (R&D).' },
    { name: 'Creative Fields (Design, Fine Arts)', use: 'For students passionate about creativity, leading to careers in graphic design, fashion, animation, and media.' },
  ];
  
  if (currentView === 'after10th') {
    return <CourseResults title="Options After 10th Class" courses={after10thCourses} onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'afterInter') {
    return <CourseResults title="Options After Intermediate" courses={afterInterCourses} onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="homepage-container">
      {/* 🔹 Hero Section */}
      <section className="hero-section">
        {/* --- UPDATED SHORT TEXT --- */}
        <h1>Confused after 10th or Inter? Your next step is here.</h1>
        <p className="sub-line">
          Discover top courses and the careers they unlock.
        </p>
        <div className="hero-buttons">
          <button onClick={() => setCurrentView('after10th')} className="cta-button">Options after 10th</button>
          <button onClick={() => setCurrentView('afterInter')} className="cta-button secondary">Options after Inter</button>
        </div>
      </section>

      {/* 🔹 Introduction Section */}
      <section className="intro-section">
        {/* --- UPDATED SHORT TEXT --- */}
        <h2>Welcome to DREAM TRACK!</h2>
        <p>
          Feeling lost is normal. We make it simple by showing you what jobs each course leads to. Choose your future with confidence.
        </p>
      </section>

      {/* ... The rest of the sections (Prompts, Features, etc.) are unchanged ... */}
      
    </div>
  );
};

export default HomePage;