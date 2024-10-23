import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Visualization from './components/visualization';

const cors = require('cors');
//const app = express();

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the routes for your app */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Default route to redirect to login page */}
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
                <Route path="/visualization" element={<Visualization />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
