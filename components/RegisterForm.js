// components/RegisterForm.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyAddress: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    rcNumber: '',
    bnNumber: '',
    cacNumber: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/registerStep2');
  };

  return (
    <div className="flex flex-col items-center w-full">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <label htmlFor="companyName" className="block text-lg font-semibold mb-2">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-green-800 transition duration-300"
              required
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="contactPerson" className="block text-lg font-semibold mb-2">Contact Person</label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-green-800 transition duration-300"
              required
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="contactEmail" className="block text-lg font-semibold mb-2">Contact Email</label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-green-800 transition duration-300"
              required
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="contactPhone" className="block text-lg font-semibold mb-2">Contact Phone</label>
            <input
              type="text"
              id="contactPhone"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-green-800 transition duration-300"
              required
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="rcNumber" className="block text-lg font-semibold mb-2">RC Number</label>
            <input
              type="text"
              id="rcNumber"
              name="rcNumber"
              value={formData.rcNumber}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-green-800 transition duration-300"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="bnNumber" className="block text-lg font-semibold mb-2">BN Number</label>
            <input
              type="text"
              id="bnNumber"
              name="bnNumber"
              value={formData.bnNumber}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-green-800 transition duration-300"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="cacNumber" className="block text-lg font-semibold mb-2">CAC Number</label>
            <input
              type="text"
              id="cacNumber"
              name="cacNumber"
              value={formData.cacNumber}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-green-800 transition duration-300"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button type="submit" className="bg-green-800 text-white p-3 pr-20 pl-20 rounded-lg hover:bg-white hover:text-green-800 hover:border transition duration-300">Next</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
