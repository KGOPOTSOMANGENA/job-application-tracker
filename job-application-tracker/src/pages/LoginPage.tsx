import React, { useState } from 'react';
import InputField from '../components/InputField';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`);
      const data = await res.json();

      if (data.length > 0) {
        localStorage.setItem('user', JSON.stringify(data[0]));
        navigate('/dashboard'); 
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.error(err);
      setError('Login failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <InputField
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <InputField
          label="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
