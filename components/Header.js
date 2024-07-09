// components/Header.js
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-green-800 text-2xl font-bold flex items-center">
          <img src="/logo.png" alt="VerifyNGPortal Logo" className="mr-2 h-8" />
          <Link href="/">
            <div className="text-green-600">VerifyNG</div>
          </Link>
        </div>
        <nav className="md:flex md:space-x-6 items-center">
          <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:items-center md:space-x-6`}>
            <li><Link href="/" className="text-green-800 hover:text-gray-lighter transition duration-300">Home</Link></li>
            <li><Link href="/pricing" className="text-green-800 hover:text-gray-lighter transition duration-300">Pricing</Link></li>
            <li><Link href="/contact" className="text-green-800 hover:text-gray-lighter transition duration-300">Contact</Link></li>
            <li><Link href="/signin" className="text-green-800 hover:bg-white text-green-800 py-2 px-4 rounded transition duration-300">Sign In</Link></li>
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
