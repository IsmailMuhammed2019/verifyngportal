// pages/login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });

      if (response.data.message === 'Login successful') {
        alert('Login successful!');
        router.push('/'); // Redirect to home or dashboard page after login
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleLogin} className="container mx-auto p-4 bg-white shadow-custom rounded-xl">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-lighter rounded-lg p-3 w-full focus:outline-none focus:border-blue transition duration-300"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-lg font-semibold mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-lighter rounded-lg p-3 w-full focus:outline-none focus:border-blue transition duration-300"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-green text-white px-4 py-2 rounded-md hover:bg-white hover:text-green hover:border-green hover:border-2 transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
