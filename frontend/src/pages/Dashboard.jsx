import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

import MoodTable from '../components/MoodTable';

function Dashboard() {
  const [moods, setMoods] = useState([]);

  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const getMoods = async () => {
      const response = await API.get('/mood');
      const userMoods = await response.json();
      setMoods(userMoods);
    };

    getMoods();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  console.log(moods);

  return (
    <div>
      <h1 className="text-5xl font-bold mb-2">Dashboard</h1>
      <MoodTable moods={moods} />
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
