import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  // Check if admin is authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin/login');
    } else {
      fetchJobs();
    }
  }, [navigate]);

  // Fetch Jobs
  const fetchJobs = async () => {
    const { data } = await axios.get('https://sai-job.onrender.com/api/jobs');
    setJobs(data);
  };

  // Delete Job
  const deleteJob = async (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      await axios.delete(`https://sai-job.onrender.com/api/jobs/${id}`);
      fetchJobs();
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <button onClick={() => navigate('/admin/add-job')}>Add New Job</button>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job._id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <div className="actions">
              <button onClick={() => navigate(`/admin/edit-job/${job._id}`)}>Edit</button>
              <button onClick={() => deleteJob(job._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
