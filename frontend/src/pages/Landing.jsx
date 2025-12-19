import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="m-2">
      <h1 className="text-5xl font-bold mb-2">Mood Tracker</h1>
      <button
        className="font-bold py-2 px-4 rounded bg-blue-400 w-30 h-10 mr-2"
        onClick={() => navigate('/signup')}
      >
        Signup
      </button>
      <button
        className="font-bold py-2 px-4 rounded bg-green-400 w-30 h-10 mr-2"
        onClick={() => navigate('/login')}
      >
        Login
      </button>
    </div>
  );
}

export default Landing;
