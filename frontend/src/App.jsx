import { useNavigate } from 'react-router';

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Mood tracker</h1>
      <button onClick={() => navigate('/signup')}>Click to signup</button>
      <button onClick={() => navigate('/login')}>Click to login</button>
    </div>
  );
}

export default App;
