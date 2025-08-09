import React from 'react';
import { useNavigate } from 'react-router-dom';
import JobForm from '../components/JobForm';
import type { Job } from '../types/Job';

const AddJob: React.FC = () => {
  const navigate = useNavigate();

  const handleAddJob = async (newJob: Omit<Job, 'id'>) => {
    try {
      await fetch('http://localhost:5000/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newJob),
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Add New Job</h2>
      <JobForm onSubmit={handleAddJob} buttonText="Add Job" />
    </div>
  );
};

export default AddJob;
