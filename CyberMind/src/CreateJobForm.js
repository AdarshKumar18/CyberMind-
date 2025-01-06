import React, { useState } from 'react';
import './CreateJobForm.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
 //write your config
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const CreateJobForm = ({ onClose }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('Full-Time');
  const [salaryRange, setSalaryRange] = useState({ min: 0, max: 1200000 });
  const [applicationDeadline, setApplicationDeadline] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    setErrorMessage('');

    // Validation check
    if (!jobTitle || !companyName || !location || !jobType || !applicationDeadline || !jobDescription || salaryRange.min === 0 || salaryRange.max === 0) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      // Add job to Firestore
      const docRef = await addDoc(collection(db, 'jobs'), {
        jobTitle,
        companyName,
        location,
        jobType,
        salaryRange: {
          min: salaryRange.min,
          max: salaryRange.max,
        },
        applicationDeadline,
        jobDescription,
      });

      console.log('Document written with ID: ', docRef.id);
      onClose(); // Close form after submission
    } catch (error) {
      console.error('Error adding document: ', error);
      setErrorMessage('An error occurred while publishing the job. Please check your internet connection and try again.');
    }
  };

  return (
    <div className="create-job-form">
      <h2>Create Job Opening</h2>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Full Stack Developer"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Amazon, Microsoft, Swiggy"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          >
            <option value="">Choose Preferred Location</option>
            <option value="Remote">Remote</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="jobType">Job Type</label>
          <select
            id="jobType"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            required
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="salaryRange">Salary Range</label>
          <div className="salary-range">
            <span>₹</span>
            <input
              type="number"
              id="salaryMin"
              value={salaryRange.min}
              onChange={(e) => setSalaryRange({ ...salaryRange, min: e.target.value })}
              min="0"
              required
            />
            <span> - </span>
            <span>₹</span>
            <input
              type="number"
              id="salaryMax"
              value={salaryRange.max}
              onChange={(e) => setSalaryRange({ ...salaryRange, max: e.target.value })}
              min="0"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="applicationDeadline">Application Deadline</label>
          <input
            type="date"
            id="applicationDeadline"
            value={applicationDeadline}
            onChange={(e) => setApplicationDeadline(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="jobDescription">Job Description</label>
        <textarea
          id="jobDescription"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Please share a description to let the candidate know more about the job role"
          required
        />
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="form-actions">
        <button type="button" onClick={onClose}>Close</button>
        <button type="button" onClick={handleSubmit} disabled={!!errorMessage}>
          Publish »
        </button>
      </div>
    </div>
  );
};

export default CreateJobForm;
