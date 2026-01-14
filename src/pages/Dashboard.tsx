import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import type { Job } from '../types/Job';
import styles from '../styles/HomePage.module.css';

const HomePage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // URL-driven state
  const searchQuery = searchParams.get('q') || '';
  const filterStatus = searchParams.get('status') || 'all';
  const sortField = searchParams.get('_sort') || '';
  const sortOrder = searchParams.get('_order') || 'desc';

  const handleLogout = () => navigate('/login');

  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:5000/jobs/${id}`, { method: 'DELETE' });
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  // Fetch jobs with status filter and sorting, then filter by company name
  useEffect(() => {
    const params = new URLSearchParams();

    if (filterStatus !== 'all') params.set('status', filterStatus);
    if (sortField) {
      params.set('_sort', sortField);
      params.set('_order', sortOrder);
    }

    fetch(`http://localhost:5000/jobs?${params.toString()}`)
      .then((res) => res.json())
      .then((data: Job[]) => {
        // Filter by company manually (case-insensitive)
        const filtered = searchQuery
          ? data.filter((job: Job) =>
              job.company.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : data;

        setJobs(filtered);
      })
      .catch((err) => console.error(err));
  }, [searchQuery, filterStatus, sortField, sortOrder]);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.header}>
          <h2 className={styles.navTitle}>Job Dashboard</h2>

          <div className={styles.controls}>
            {/* SEARCH */}
            <input
              className={styles.searchInput}
              placeholder="Search by company name"
              value={searchQuery}
              onChange={(e) =>
                setSearchParams((prev) => {
                  prev.set('q', e.target.value);
                  return prev;
                })
              }
            />

            {/* FILTER */}
            <select
              className={styles.select}
              value={filterStatus}
              onChange={(e) =>
                setSearchParams((prev) => {
                  prev.set('status', e.target.value);
                  return prev;
                })
              }
            >
              <option value="all">All</option>
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="rejected">Rejected</option>
              <option value="offer">Offer</option>
            </select>

            {/* SORT */}
            <select
              className={styles.select}
              value={sortField}
              onChange={(e) => {
                const value = e.target.value;

                if (value === '') {
                  setSearchParams({
                    q: searchQuery,
                    status: filterStatus,
                  });
                } else if (value === 'az') {
                  setSearchParams({
                    q: searchQuery,
                    status: filterStatus,
                    _sort: 'title',
                    _order: 'asc',
                  });
                } else {
                  setSearchParams({
                    q: searchQuery,
                    status: filterStatus,
                    _sort: 'id',
                    _order: value === 'oldest' ? 'asc' : 'desc',
                  });
                }
              }}
            >
              <option value="">No sorting</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="az">A - Z</option>
            </select>

            <button
              className={styles.addButton}
              onClick={() => navigate('/add-job')}
            >
              + Add Job
            </button>

            <button
              className={styles.logoutButton}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className={styles.jobList}>
        {jobs.length === 0 ? (
          <p className={styles.emptyState}>No jobs match your criteria.</p>
        ) : (
          jobs.map((job: Job) => (
            <div
              key={job.id}
              className={styles.jobCard}
              onClick={() => navigate(`/jobs/${job.id}`)}
            >
              <h3>{job.title}</h3>
              <p>
                {job.company} - {job.location}
              </p>
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
