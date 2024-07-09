// components/Header.js
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white p-4 font-roboto">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col items-start">
          <div className="flex items-center">
            <img src="/logo.png" alt="VerifyNGPortal Logo" className="mr-2 h-8" />
            <Link href="/">
              <div className="text-green-800 text-2xl font-bold">VerifyNG</div>
            </Link>
          </div>
          <div className="text-green-800 text-xs ml-3">one verification for all...</div>
        </div>
        <nav className="md:flex md:space-x-6 items-center">
          <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:items-center md:space-x-6`}>
            <li><Link href="/" className="text-green-800 hover:text-gray-600 transition duration-300">Home</Link></li>
            <li><Link href="/pricing" className="text-green-800 hover:text-gray-600 transition duration-300">Pricing</Link></li>
            <li><Link href="/contact" className="text-green-800 hover:text-gray-600 transition duration-300">Contact</Link></li>
            <li>
              <Link href="/signin">
                <button className="bg-green-800 text-white py-2 px-4 rounded transition duration-300 hover:bg-white hover:text-green-800 border border-green-800">
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-green-800 focus:outline-none">
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
