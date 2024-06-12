import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loginResponse = await axios.post('http://localhost:8000/api/v1/users/login', credentials);
            if (loginResponse.data.stausCode === 200) {
                // Store accessToken in localStorage for future requests
                localStorage.setItem('accessToken', loginResponse.data.data.accessToken);
                alert(loginResponse.data.message);
                // Navigate to landing page with user details as state
                navigate('/landing', { state: { user: loginResponse.data.data.user } });
            } else {
                // Handle non-successful login attempt (e.g., show an error message)
                console.error('Login failed:', loginResponse.data.message);
                console.log(loginResponse.data.data.accessToken);
            }
        } catch (error) {
            console.error('Login error:', error);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;