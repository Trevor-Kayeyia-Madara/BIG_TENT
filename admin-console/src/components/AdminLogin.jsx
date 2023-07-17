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
    <div className="container">
      <h2 className="text-center mt-5">Admin Login</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <div className="text-center mt-3">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
