import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Mood Tracker</h1>
      <button onClick={() => navigate('/signup')}>Signup</button>
      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  );
}

export default Landing;
