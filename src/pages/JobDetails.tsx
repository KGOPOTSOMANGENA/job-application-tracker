import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Job } from '../types/Job';
import styles from '../styles/JobDetails.module.css';

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch((err) => console.error('Error fetching job details:', err));
  }, [id]);

  if (!job) return <div>Loading job details...</div>;

  return (
    <div className={styles.container}>
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Status:</strong> {job.status}</p>
      <p><strong>Description:</strong> {job.description}</p>

      <button onClick={() => navigate(-1)} className={styles.backButton}>
        ← Back to Dashboard
      </button>
    </div>
  );
};

export default JobDetails;
