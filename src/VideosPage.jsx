import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { groupDetails } from './data/courseData';

const VideosPage = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const details = groupDetails[groupId];

  if (!details) return <div>Video details not found</div>;

  // This code gathers all videos from all subjects into one list
  const allVideos = details.subjects.flatMap(subject =>
    subject.videos ? subject.videos.map(video => ({ ...video, subjectName: subject.name })) : []
  );

  return (
    <div className="page-container">
      <h1 className="page-title">Class Videos for {details.name}</h1>
      {allVideos.length > 0 ? (
        <div className="videos-grid-container">
          {allVideos.map((video, index) => (
            <div key={index} className="video-item">
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="video-title">{video.title} ({video.subjectName})</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="page-description">No videos are available for this course yet.</p>
      )}
      <button onClick={() => navigate(-1)} className="back-button">← Go Back</button>
    </div>
  );
};
export default VideosPage;