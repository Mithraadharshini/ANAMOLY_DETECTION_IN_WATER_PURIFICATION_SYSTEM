import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8501/login', { email, password });
      alert(response.data.message);
      if (response.status === 200) {
        navigate('/dashboard'); // Redirect after successful login
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error: ' + (error.response?.data?.message || 'An unexpected error occurred.'));
    }
  };

  return (
    <div>
     <div className="background-image"></div>
    <div className="container">
    <h2>Login to Your Account</h2>
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <a href="/signup">Sign up here</a></p>
  </div>
  </div>
  );
};

export default Login;
