import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Error from '../components/Error';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await signup(email, password);

      if (!result.success) {
        setError(result.error);
        return;
      }

      navigate('/dashboard');
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  return (
    <div className="m-2">
      {error && <Error message={error} />}
      <h1 className="text-5xl font-bold mb-2">Signup</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="email" className="text-2xl">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="Enter your email..."
          className="border-2 w-100 rounded"
        />

        <label value={password} htmlFor="password" className="text-2xl">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
          placeholder="Enter your password..."
          className="border-2 w-100 rounded"
        />
        <div>
          <button className="font-bold py-2 px-4 rounded bg-blue-400 w-30 h-10 mr-2">
            Signup
          </button>
          <button
            onClick={() => navigate('/login')}
            className="font-bold py-2 px-4 rounded bg-green-400 w-30 h-10 mt-2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
