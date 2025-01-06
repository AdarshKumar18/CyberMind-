import React from 'react';
import './Navbar2.css'; 

const Navbar = () => {
  return (
    <nav className="navbar2">
      <div className="search-bar">
        <input type="text" placeholder="Search By Job Title, Role" />
        <button className="search-button">
          <i className="fas fa-search"></i> 
        </button>
      </div>

      <div className="filter-section">
        <div className="filter-item">
          <i className="fas fa-map-marker-alt"></i> 
          <span>Preferred Location</span>
          <i className="fas fa-chevron-down"></i> 
        </div>

        <div className="filter-item">
          <i className="fas fa-briefcase"></i> 
          <span>Job Type</span>
          <i className="fas fa-chevron-down"></i> 
        </div>

        <div className="filter-item">
          <span>Salary Per Month</span>
          <div className="slider">
            <input type="range" min="0" max="100" value="50" /> 
            <span>₹35K - ₹80K</span> 
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;