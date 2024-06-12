import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Landing from './Components/Landing';
import Login from './Components/Login';

const App = () => {
    const [user, setUser] = useState({ username: '', email: '' });
    
    const handleUserLogin = (userData) => {
      setUser(userData);
  };

    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/landing" element={<Landing user={user} />} />
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login setUser={handleUserLogin}  />} />
            </Routes>
        </Router>
    );
};

export default App;

