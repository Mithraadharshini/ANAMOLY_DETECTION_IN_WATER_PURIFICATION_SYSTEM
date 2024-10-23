import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8501/signup', { email, password });

      if (response.data && response.data.message) {
        alert(response.data.message);
        navigate('/login');
      } else {
        alert('Signup successful, but no message received.');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.data) {
        alert('Error: ' + error.response.data.message);
      } else if (error.request) {
        alert('Network error: Unable to reach the server.');
      } else {
        alert('An unexpected error occurred: ' + error.message);
      }
    }
  };

  return (
    <div>
     <div className="background-image"></div>
      <div className="container">
        <h2>Signup Here!!!</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
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
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/login">Login here</a></p>
      </div>
    </div>
  );
};

export default Signup;
