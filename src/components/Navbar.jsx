import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const token = localStorage.getItem('token'); // ✅ Check for admin token
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin-login');
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src="/images/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        {!token ? (
          <Link to="/admin-login">Admin Login</Link> // ✅ Show login when no token
        ) : (
          <>
            <Link to="/admin/dashboard">Admin Dashboard</Link> {/* ✅ Show dashboard if logged in */}
            <button onClick={handleLogout} className="logout-btn">Logout</button> {/* ✅ Logout */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
