// components/RegisterFormStep2.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const RegisterFormStep2 = () => {
  const [termsAgreed, setTermsAgreed] = useState(false);
  const router = useRouter();

  const handleCheckboxChange = (e) => {
    setTermsAgreed(e.target.checked);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (termsAgreed) {
      // Handle registration logic here
      alert('Registration successful!');
      router.push('/');
    } else {
      alert('Please agree to the terms and conditions.');
    }
  };

  return (
    <form onSubmit={handleRegister} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="companyAddress" className="block text-lg font-semibold mb-2">Company Address</label>
          <input
            type="text"
            id="companyAddress"
            name="companyAddress"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-green-800 transition duration-300"
            required
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-lg font-semibold mb-2">City</label>
          <input
            type="text"
            id="city"
            name="city"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-green-800 transition duration-300"
            required
          />
        </div>
        <div>
          <label htmlFor="state" className="block text-lg font-semibold mb-2">State</label>
          <input
            type="text"
            id="state"
            name="state"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-green-800 transition duration-300"
            required
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-lg font-semibold mb-2">Country</label>
          <select
            id="country"
            name="country"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-green-800 transition duration-300"
            required
            defaultValue="Nigeria"
          >
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
            <option value="South Africa">South Africa</option>
            <option value="Kenya">Kenya</option>
          </select>
        </div>
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="industry" className="block text-lg font-semibold mb-2">Industry</label>
          <select
            id="industry"
            name="industry"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-green-800 transition duration-300"
            required
          >
            <option value="">Select Industry</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
          </select>
        </div>
        <div className="col-span-1 md:col-span-2 flex items-center mt-8">
          <input
            type="checkbox"
            id="termsAgreed"
            name="termsAgreed"
            checked={termsAgreed}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label htmlFor="termsAgreed" className="text-lg font-semibold">I agree to the terms and conditions</label>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button 
          type="submit" 
          className={`bg-green-800 text-white p-3 rounded-lg ${termsAgreed ? 'hover:bg-white hover:text-green-800 hover:border transition duration-300' : 'bg-gray-300 cursor-not-allowed'}`} 
          disabled={!termsAgreed}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterFormStep2;
