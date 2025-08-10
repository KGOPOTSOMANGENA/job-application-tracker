import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Job } from '../types/Job';
import '../styles/EditJob.css';


const EditJob: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    status: 'applied',
  });

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setFormData({
          title: data.title,
          company: data.company,
          location: data.location,
          status: data.status,
        });
      })
      .catch((err) => console.error('Error loading job:', err));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`http://localhost:5000/jobs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...job, ...formData }),
    });

    navigate('/dashboard');
  };

  if (!job) return <p>Loading job...</p>;

  return (
    <div className="editJobContainer">
      <h2>Edit Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Job Title"
          required
        />
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
          required
        />
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          required
        />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="rejected">Rejected</option>
          <option value="offer">Offer</option>
        </select>
        <button type="submit">Update Job</button>
      </form>
      </div>
  );
};
export default EditJob;
