import React from 'react';
import '../styles/testimonials.css'

const videoLinks = [
  'https://aaremodels.com/video/v5.mp4',
  'https://aaremodels.com/video/v3.mp4',
  'https://aaremodels.com/video/v2.mp4',
  'https://aaremodels.com/video/v4.mp4',
  'https://aaremodels.com/video/v1.mp4',
  'https://aaremodels.com/video/v6.mp4',
];

const VideoGrid = () => {
  return (
    <div className="video-grid">
      {videoLinks.map((link, index) => (
        <video key={index} controls className="video-item">
          <source src={link} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
};

export default VideoGrid;
