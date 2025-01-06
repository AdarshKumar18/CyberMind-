import logo from './logo.svg';
import './App.css';
import { reportWebVitals } from 'web-vitals';
import Navbar from './Navbar';
import JobCard from './JobCard';
import Navbar2 from './Navbar2';

const jobData = [
  {
    companyLogo: 'amazon_logo.png',
    jobTitle: 'Full Stack Developer',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12 LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized'
    ],
    postedTime: '24h Ago'
  },
  {
    companyLogo: 'tesla_logo.png',
    jobTitle: 'Node Js Developer',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12 LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized'
    ],
    postedTime: '24h Ago'
  },
  {
    companyLogo: 'swiggy.png',
    jobTitle: 'UI/UX Designer',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12 LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized'
    ],
    postedTime: '24h Ago'
  },
  {
    companyLogo: 'amazon_logo.png',
    jobTitle: 'Full Stack Developer',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12 LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized'
    ],
    postedTime: '24h Ago'
  },
  {
    companyLogo: 'tesla_logo.png',
    jobTitle: 'Node Js Developer',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12 LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized'
    ],
    postedTime: '24h Ago'
  },
  {
    companyLogo: 'swiggy.png',
    jobTitle: 'UI/UX Designer',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12 LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized'
    ],
    postedTime: '24h Ago'
  },
  {
    companyLogo: 'amazon_logo.png',
    jobTitle: 'Full Stack Developer',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12 LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized'
    ],
    postedTime: '24h Ago'
  },
  {
    companyLogo: 'tesla_logo.png',
    jobTitle: 'Node Js Developer',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12 LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized'
    ],
    postedTime: '24h Ago'
  },
  // ... more job data objects
];


function App() {
  return (
    <>
    <Navbar/>
    
      <Navbar2/>
    
    <div className="app-container">
      <div className="job-card-grid"> 
          {jobData.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
      </div>
      </div>
    </>


    
    
    
  );
}

export default App;
