import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

import MoodTable from '../components/MoodTable';
import MoodForm from '../components/MoodForm';

function Dashboard() {
  const [moods, setMoods] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);
  const { logout, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const response = await API.get('/mood');
        setMoods(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMoods();
  }, []);

  const handleSubmitMood = async (mood) => {
    try {
      const response = await API.post('/mood', mood);
      setMoods((prev) => [...prev, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteMood = async (id) => {
    try {
      const confirm = window.confirm(
        'Are you sure you want to delete this mood?'
      );

      if (!confirm) {
        return;
      }

      await API.delete(`/mood/${id}`);
      setMoods((prev) => prev.filter((m) => m._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto ">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Dashboard</h1>

        <MoodForm
          onSubmit={handleSubmitMood}
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
          setMoods={setMoods}
        />

        <h2 className="text-2xl font-bold mt-2 mb-2 text-gray-800">
          Recent moods
        </h2>

        <div className="bg-white rounded shadow-sm p-4 mb-4">
          <MoodTable
            moods={moods}
            onUpdate={setSelectedMood}
            onDelete={handleDeleteMood}
          />
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
