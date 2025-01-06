import React, { useState } from 'react';
import './Navbar.css';
import CreateJobForm from './CreateJobForm';

const Navbar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content"> 
        <div className="navbar-logo">
          <img src="prr.jpg" alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/find-jobs">Find Jobs</a></li>
          <li><a href="/find-talents">Find Talents</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
        </ul>
        <div className="navbar-action">
          {isFormOpen && (
            <div className="modal-overlay"> 
              <CreateJobForm onClose={setIsFormOpen} /> 
            </div>
          )}
          <button className="create-jobs-button" onClick={handleButtonClick}>Create Jobs</button> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;