import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Job } from '../types/Job';
import styles from '../styles/HomePage.module.css';

const HomePage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error('Error fetching jobs:', err));
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Job Dashboard</h2>
        <input
          type="text"
          placeholder="Search by title, company or location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.jobList}>
        {filteredJobs.length === 0 ? (
          <p>No matching jobs found.</p>
        ) : (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className={styles.jobCard}
              onClick={() => navigate(`/jobs/${job.id}`)}
            >
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>Status: {job.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;

