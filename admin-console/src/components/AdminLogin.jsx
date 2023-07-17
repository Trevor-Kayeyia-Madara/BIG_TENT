import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === 'Admin' && password === 'bigtent23@254') {
      // Successful login
      setErrorMessage('');
      try {
        const response = await fetch('/admin/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        // Perform any login-related logic here (e.g., setting authentication state)
        if (response.ok) {
          navigate('/admin/dashboard'); // Navigate to the dashboard
        } else {
          setErrorMessage('Login failed');
        }
      } catch (error) {
        setErrorMessage('Login failed');
      }
    } else {
      // Invalid credentials
      setErrorMessage('Invalid username or password');
    }
    // Clear form inputs
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
