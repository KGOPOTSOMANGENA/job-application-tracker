import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="welcome-box">
        <h1>Welcome to Job Application Tracker</h1>
      </div>

      <p className="subtitle">
        Track your job applications easily  applied, interviewed, and rejected.
      </p>


      <h2 className="how-it-works-title">HOW IT WORKS</h2>
      <div className="how-it-works-boxes">
        <div className="feature-box">
          <h3>Add The Job</h3>
          <ul>
            <li>Company name</li>
            <li>Role</li>
            <li>Status (Applied, Interviewed, Rejected)</li>
            <li>Date applied</li>
            <li>
              Extra details about the company and job (duties, requirements, etc.)
            </li>
          </ul>
        </div>
        <div className="feature-box">
          <h3>Track Progress</h3>
          <p>
            View and update your applications based on the current status to stay
            organized and focused.
          </p>
        </div>
        <div className="feature-box">
          <h3>All In One Place</h3>
          <p>
            A simple dashboard to access all your job applications anytime, anywhere.
          </p>
        </div>
      </div>

      <div className="landing-buttons">
        <Link to="/register">
          <button className="primary-button">Register</button>
        </Link>
        <Link to="/login">
          <button className="secondary-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;

