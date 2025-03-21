import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-container">
      <h1>Welcome to Job Portal</h1>
      <p>Find your dream job today!</p>
      <button onClick={() => navigate('/jobs')}>GET STARTED</button>
    </div>
  );
};

export default LandingPage;
