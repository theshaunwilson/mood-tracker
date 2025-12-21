import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

import MoodTable from '../components/MoodTable';
import MoodForm from '../components/MoodForm';

function Dashboard() {
  const [moods, setMoods] = useState([]);

  const { logout, token } = useAuth();
  const navigate = useNavigate();

  const fetchMoods = useCallback(async () => {
    if (!token) return;

    try {
      const response = await API.get('/mood', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMoods(response.data);
    } catch (error) {
      console.error('Failed to fetch moods', error);
    }
  }, [token]);

  useEffect(() => {
    fetchMoods();
  }, [fetchMoods]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Dashboard</h1>

        <h2 className="text-2xl font-bold mt-2 mb-2 text-gray-800">Add Mood</h2>
        <MoodForm onMoodAdded={fetchMoods} />
        <h2 className="text-2xl font-bold mt-2 mb-2 text-gray-800">
          Recent moods
        </h2>
        <div className="bg-white rounded shadow-sm p-4 mb-4">
          <MoodTable moods={moods} />
        </div>

        <button
          onClick={handleLogout}
          className="font-bold py-2 px-4 rounded bg-orange-400 text-white hover:bg-orange-500 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
