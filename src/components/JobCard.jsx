import { motion } from 'framer-motion';
import '../styles/JobCard.css';

const JobCard = ({ job }) => {
  return (
    <motion.div
      className="job-card"
      whileHover={{ scale: 1.05, rotateY: 10 }}
      transition={{ duration: 0.5 }}
    >
      <img src={job.logo || '/images/logo.png'} alt="Company Logo" />
      <h3>{job.role}</h3>
      <p>{job.description}</p>
      <p><strong>Salary:</strong> ₹{job.salary}</p>
      <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
      <p><strong>Experience:</strong> {job.experience}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <button className="apply-btn">Apply Now</button>
    </motion.div>
  );
};

export default JobCard;
