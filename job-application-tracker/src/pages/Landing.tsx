import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to Job Application Tracker</h1>
      <p>Track your job applications easily – applied, interviewed, and rejected.</p>
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
