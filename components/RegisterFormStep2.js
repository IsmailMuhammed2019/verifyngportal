// components/RegisterFormStep2.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const RegisterFormStep2 = () => {
  const [companyAddress, setCompanyAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('Nigeria');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const router = useRouter();

  const handleCheckboxChange = (e) => {
    setTermsAgreed(e.target.checked);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (termsAgreed) {
      try {
        const response = await axios.post('/api/register', {
          companyAddress,
          city,
          state,
          country,
        });

        if (response.data.message === 'User registered successfully') {
          alert('Registration successful!');
          router.push('/login');
        }
      } catch (error) {
        console.error('Registration error:', error);
        alert('Registration failed. Please try again.');
      }
    } else {
      alert('Please agree to the terms and conditions.');
    }
  };

  return (
    <form onSubmit={handleRegister} className="container mx-auto p-4 bg-white shadow-custom rounded-xl">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="companyAddress" className="block text-lg font-semibold mb-2">Company Address</label>
          <input
            type="text"
            id="companyAddress"
            name="companyAddress"
            value={companyAddress}
            onChange={(e) => setCompanyAddress(e.target.value)}
            className="border border-gray-lighter rounded-lg p-3 w-full focus:outline-none focus:border-blue transition duration-300"
            required
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-lg font-semibold mb-2">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-gray-lighter rounded-lg p-3 w-full focus:outline-none focus:border-blue transition duration-300"
            required
          />
        </div>
        <div>
          <label htmlFor="state" className="block text-lg font-semibold mb-2">State</label>
          <select
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="border border-gray-lighter rounded-lg p-3 w-full focus:outline-none focus:border-blue transition duration-300"
            required
          >
            <option value="">Select State</option>
            {/* Include options for Nigerian states */}
          </select>
        </div>
        <div>
          <label htmlFor="country" className="block text-lg font-semibold mb-2">Country</label>
          <select
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border border-gray-lighter rounded-lg p-3 w-full focus:outline-none focus:border-blue transition duration-300"
            required
            disabled // Disable selection for now since it's defaulting to Nigeria
          >
            <option value="Nigeria">Nigeria</option>
            {/* Include other country options if needed */}
          </select>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="termsAgreed"
            name="termsAgreed"
            checked={termsAgreed}
            onChange={handleCheckboxChange}
            className="mr-2"
            required
          />
          <label htmlFor="termsAgreed" className="text-lg font-semibold">I agree to the terms and conditions</label>
        </div>
      </div>
      <div className="flex justify-end mt-10">
        <button type="submit" className={`bg-green-800 text-white p-3 rounded-lg ${termsAgreed ? 'hover:bg-white hover:text-green-800 hover:border-green transition duration-300' : 'bg-gray-lighter cursor-not-allowed'}`} disabled={!termsAgreed}>Register</button>
      </div>
    </form>
  );
};

export default RegisterFormStep2;
