import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <h1 className="text-5xl font-bold mb-2">Dashboard</h1>
      <button
        onClick={handleLogout}
        className="font-bold py-2 px-4 rounded bg-orange-400 w-30 h-10 mt-2"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
