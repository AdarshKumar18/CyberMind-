import React from 'react';
import './JobCard.css';

const JobCard = ({ companyLogo, jobTitle, experience, location, salary, description, postedTime }) => {
  return (
    <div className="job-card">
      <div className="top-section">
        <div className="company-logo">
          <img src={companyLogo} alt={`${companyLogo} Logo`} />
        </div>
        <div className="posted-time">{postedTime}</div>
      </div>
      <div className="job-title">{jobTitle}</div>
      <div className="job-info">
        <div className="info-item">
          <i className="fas fa-user"></i>
          {experience}
        </div>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          {location}
        </div>
        <div className="info-item">
          <i className="fas fa-rupee-sign"></i>
          {salary}
        </div>
      </div>
      <div className="job-description">
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default JobCard;