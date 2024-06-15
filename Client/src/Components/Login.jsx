// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [credentials, setCredentials] = useState({ username: '', password: '' });
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCredentials(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const loginResponse = await axios.post('http://localhost:8000/api/v1/users/login', credentials);
//             if (loginResponse.data.stausCode === 200) {
//                 // Store accessToken in localStorage for future requests
//                 localStorage.setItem('accessToken', loginResponse.data.data.accessToken);
//                 alert(loginResponse.data.message);
//                 // Navigate to landing page with user details as state
//                 navigate('/landing', { state: { user: loginResponse.data.data.user } });
//             } else {
//                 // Handle non-successful login attempt (e.g., show an error message)
//                 console.error('Login failed:', loginResponse.data.message);
//                 console.log(loginResponse.data.data.accessToken);
//             }
//         } catch (error) {
//             console.error('Login error:', error);
//             // Handle error (e.g., show an error message)
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username:</label>
//                 <input
//                     type="text"
//                     id="username"
//                     name="username"
//                     value={credentials.username}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={credentials.password}
//                     onChange={handleChange}
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;

"use client";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Label from "./ui/label";
import Input from "./ui/input";
import cn from "../utils/cn";
// import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from "@tabler/icons-react";

export function Login() {
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
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Aceternity
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow yet
      </p>
      <form className="my-8"  onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={credentials.username}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Login &rarr;
          <BottomGradient />
        </button>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        {/* <div className="flex flex-col space-y-4">
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button"
          >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div> */}
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Login;