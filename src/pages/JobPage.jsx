import { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../components/JobCard';
import '../styles/JobPage.css';

const JobPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Update URL to match your backend API
        const { data } = await axios.get('https://sai-job.onrender.com/api/jobs'); // <-- Correct URL
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error.message);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="job-page">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};

export default JobPage;
