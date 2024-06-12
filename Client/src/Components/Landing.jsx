import React from 'react';
import { useLocation } from 'react-router-dom';

const LandingPage = () => {
    const location = useLocation();
    const user = location.state?.user;

    if (!user) {
        return <div>No user data found</div>;
    }

    return (
        <div>
            <h1>Welcome, {user.fullName}</h1>
            <div>
                <img src={user.avatar} alt="User Avatar" />
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Full Name: {user.fullName}</p>
                <p>Member Since: {new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default LandingPage;