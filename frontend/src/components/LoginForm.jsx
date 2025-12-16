import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthProvider from '../context/AuthContext';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (email, password) => {
    console.log(email, password);
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form></form>
    </div>
  );
}

export default LoginForm;
