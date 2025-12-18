import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="Enter your email..."
        />

        <label value={password} htmlFor="password">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
          placeholder="Enter your password..."
        />
        <button>Signup</button>
        <button onClick={() => navigate('/login')}>Go to login page</button>
      </form>
    </div>
  );
}

export default Signup;
