import React, { useState, useEffect } from 'react';
import type { Job } from '../types/Job';
import styles from '../styles/JobForm.module.css';

type Props = {
  initialData?: Job;
  onSubmit: (job: Omit<Job, 'id'>) => void;
  buttonText?: string;
};

const JobForm: React.FC<Props> = ({ initialData, onSubmit, buttonText = "Submit" }) => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setCompany(initialData.company);
      setLocation(initialData.location);
      setStatus(initialData.status);
      setDescription(initialData.description || '');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, company, location, status, description });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" placeholder="Job Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input type="text" placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} required />
      <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} required />
      <select value={status} onChange={e => setStatus(e.target.value)} required>
        <option value="">Select Status</option>
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      <textarea placeholder="Description (optional)" value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default JobForm;
