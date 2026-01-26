import { Link } from "react-router-dom";
import "../styles/global.css";

import jobImg from "../assets/job.jpg";
import trackImg from "../assets/track.jpg";
import statusImg from "../assets/status.jpg";

const Landing = () => {
  return (
    <div className="landing-container">
      {/* Welcome Section */}
      <div className="welcome-box">
        <h1>Welcome to Job Application Tracker</h1>
        <p className="subtitle">
          Track your job applications easily — applied, interviewed, and rejected.
        </p>

        <div className="welcome-buttons">
          <Link to="/register">
            <button className="welcome-primary">Get Started</button>
          </Link>
          <Link to="/login">
            <button className="welcome-secondary">Login</button>
          </Link>
        </div>
      </div>

      <h2 className="how-it-works-title">HOW IT WORKS</h2>

      <div className="how-it-works-cards">
        <div className="work-card">
          <div className="card-image">
            <img src={jobImg} alt="Add job" />
          </div>
          <div className="card-content">
            <h3>Add a Job</h3>
            <p>
              Capture company name, role, application date and job requirements
              in one place.
            </p>
          </div>
        </div>

        <div className="work-card">
          <div className="card-image">
            <img src={trackImg} alt="Track progress" />
          </div>
          <div className="card-content">
            <h3>Track Progress</h3>
            <p>
              Update your application status as you move through interview stages.
            </p>
          </div>
        </div>

        <div className="work-card">
          <div className="card-image">
            <img src={statusImg} alt="All in one place" />
          </div>
          <div className="card-content">
            <h3>All In One Place</h3>
            <p>
              View and manage all your job applications from a single dashboard.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="quick-links">
        <h2>Quick Job Search Links</h2>
        <div className="links">
          <a href="https://www.linkedin.com/jobs" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://www.indeed.com" target="_blank" rel="noreferrer">
            Indeed
          </a>
          <a href="https://www.glassdoor.com" target="_blank" rel="noreferrer">
            Glassdoor
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
