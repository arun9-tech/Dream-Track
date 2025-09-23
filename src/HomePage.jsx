import React, { useState } from 'react';

// --- This is the new "Smart" Card with the "Show Books" button ---
const CourseCard = ({ course }) => {
  const [showBooks, setShowBooks] = useState(false);

  const toggleBooks = () => {
    setShowBooks(!showBooks);
  };

  return (
    <div className="course-card">
      <h3>{course.name}</h3>
      <p>{course.use}</p>
      
      <button onClick={toggleBooks} className="toggle-books-button">
        {showBooks ? 'Hide Books' : '📖 Show Related Books'}
      </button>

      {showBooks && (
        <div className="books-section">
          <h4>Recommended Books:</h4>
          <ul>
            {course.books.map((book) => (
              <li key={book.title} className="book-item">
                <div className="book-info">
                  <span className="book-title">{book.title}</span>
                  <span className="book-author">by {book.author}</span>
                </div>
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="buy-link">
                  View →
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


// --- This part of the code now uses our new "Smart" Card ---
const CourseResults = ({ title, courses, onBack }) => {
  return (
    <div className="results-page">
      <div className="results-header">
        <h2>{title}</h2>
        <button onClick={onBack} className="back-button">← Go Back</button>
      </div>
      <div className="course-card-container">
        {courses.map((course) => (
          <CourseCard key={course.name} course={course} />
        ))}
      </div>
    </div>
  );
};


// --- The rest of the page remains the same ---
const HomePage = () => {
  const [currentView, setCurrentView] = useState('home');

  // --- NEW list with books added ---
  const after10thCourses = [
    { 
      name: 'Intermediate (MPC, BiPC, etc.)', 
      use: 'Builds a strong academic foundation for professional degrees like Engineering, Medicine, and B.Com.',
      books: [
        { title: 'Concepts of Physics', author: 'H.C. Verma', link: '#' },
        { title: 'Objective Chemistry', author: 'R.K. Gupta', link: '#' },
        { title: 'Mathematics for Class 11', author: 'R.D. Sharma', link: '#' }
      ]
    },
    { 
      name: 'Polytechnic / Diploma', 
      use: 'Provides job-oriented technical skills for faster entry into roles like Junior Engineer in Civil, Mechanical, or IT fields.',
      books: [
        { title: 'A Textbook of Engineering Mathematics', author: 'N.P. Bali', link: '#' },
        { title: 'Basic Electrical Engineering', author: 'V.K. Mehta', link: '#' }
      ]
    },
    { 
      name: 'ITI (Industrial Training)', 
      use: 'Focuses on practical, trade-specific skills for immediate employment as an electrician, fitter, welder, or mechanic.',
      books: [
        { title: 'Workshop Calculation & Science', author: 'Arihant Experts', link: '#' },
        { title: 'Electrician Trade Theory', author: 'N.K. Sharma', link: '#' }
      ]
    },
  ];

  const afterInterCourses = [
    { 
      name: 'Degree (B.Tech, B.Sc, B.Com)', 
      use: 'Allows deep specialization in a chosen field, opening doors to a wide range of graduate-level jobs and higher studies (Masters, PhD).',
      books: [
        { title: 'Let Us C', author: 'Yashavant Kanetkar', link: '#' },
        { title: 'University Physics', author: 'Young and Freedman', link: '#' }
      ]
    },
    { 
      name: 'Professional Courses (CA, CMA)', 
      use: 'Highly specialized training for prestigious careers in finance, accounting, and corporate law.',
      books: [
        { title: 'Financial Accounting for CA', author: 'P.C. Tulsian', link: '#' },
        { title: 'Corporate and Other Laws', author: 'Munish Bhandari', link: '#' }
      ]
    },
  ];

  if (currentView === 'after10th') {
    return <CourseResults title="Options After 10th Class" courses={after10thCourses} onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'afterInter') {
    return <CourseResults title="Options After Intermediate" courses={afterInterCourses} onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="homepage-container">
      {/* ... the rest of the homepage JSX is unchanged ... */}
      <section className="hero-section">
        <h1>Confused after 10th or Inter? Your next step is here.</h1>
        <p className="sub-line">
          Discover top courses and the careers they unlock.
        </p>
        <div className="hero-buttons">
          <button onClick={() => setCurrentView('after10th')} className="cta-button">Options after 10th</button>
          <button onClick={() => setCurrentView('afterInter')} className="cta-button secondary">Options after Inter</button>
        </div>
      </section>
      <section className="intro-section">
        <h2>Welcome to DREAM TRACK!</h2>
        <p>
          Feeling lost is normal. We make it simple by showing you what jobs each course leads to. Choose your future with confidence.
        </p>
      </section>
    </div>
  );
};

export default HomePage;