import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Job } from '../types/Job';
import styles from '../styles/HomePage.module.css';

const HomePage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error('Error fetching jobs:', err));
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:3000/jobs/${id}`, {
      method: 'DELETE',
    });
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const filteredJobs = jobs
    .filter((job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((job) => filterStatus === 'all' || job.status === filterStatus)
    .sort((a, b) => {
      if (sortOrder === 'newest') {
        return b.id - a.id;
      } else if (sortOrder === 'oldest') {
        return a.id - b.id;
      } else {
        return a.title.localeCompare(b.title);
      }
    });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Job Dashboard</h2>

        <div className={styles.controls}>
          <input
            type="text"
            placeholder="Search by title, company, or location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className={styles.select}
          >
            <option value="all">All</option>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="rejected">Rejected</option>
            <option value="offer">Offer</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className={styles.select}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="az">A - Z</option>
          </select>

          <button onClick={() => navigate('/add-job')} className={styles.addButton}>
            + Add Job
          </button>
        </div>
      </div>

      <div className={styles.jobList}>
        {filteredJobs.length === 0 ? (
          <p className={styles.emptyState}>No jobs match your criteria.</p>
        ) : (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className={styles.jobCard}
              onClick={() => navigate(`/jobs/${job.id}`)}
            >
              <h3>{job.title}</h3>
              <p>{job.company} - {job.location}</p>
              <p>Status: {job.status}</p>
              <div className={styles.actions}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/edit/${job.id}`);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(job.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;

