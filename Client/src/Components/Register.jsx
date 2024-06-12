import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Step 1: Import Link
import axios from "axios";

const Register = () => {v
  const [userDetails, setUserDetails] = useState({ username: "", email: "" });
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false); // Step 2: New state variable for tracking registration status
  
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", userDetails.email);
    formData.append("username", userDetails.username);
    formData.append("password", password);
    if (avatar) {
      formData.append("avatar", avatar, avatar.name);
    }
    if (coverImage) {
      formData.append("coverImage", coverImage, coverImage.name);
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(response.data);
      // setUser(userDetails);
      // setIsRegistered(true); // Step 3: Set registration status to true after successful registration
      navigate("/login", { state: { email: userDetails.email, password: password } }); 
    } catch (error) {
      console.error("Error registering user", error);
    }
  };
  
  return (
    <div>
      <h2>Register</h2>
      {!isRegistered ? ( // Step 4: Conditionally render form or Link
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            required
            placeholder="Email"
          />
          <input
            type="text"
            name="username"
            value={userDetails.username}
            onChange={handleChange}
            required
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
          <input type="file" onChange={(e) => setCoverImage(e.target.files[0])} />
          <button type="submit">Register</button>
        </form>
      ) : (
        <div>
          <p>Registration successful!</p>
          <Link to="/login">Go to Login</Link> {/* Render Link to login page */}
        </div>
      )}
    </div>
  );
};

export default Register;

