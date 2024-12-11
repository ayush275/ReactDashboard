import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Header = ({ onLogout }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleLogout = () => {
    onLogout(); // Trigger the logout function passed as a prop
  };

  return (
    <header className="flex items-center justify-between bg-blue-600 text-white p-4 shadow relative">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png" 
          alt="Company Logo"
          className="h-14 w-14 rounded-full border-2 border-white mr-2" 
        />
      </div>

      {/* Heading */}
      <div className="text-2xl font-semibold">Toll Management System(MCM)</div>

      {/* Admin Icon */}
      <div className="relative">
        <FaUserCircle
          size={45} 
          className="cursor-pointer"
          onClick={toggleDropdown}
        />

        {/* Dropdown Menu */}
        {isDropdownVisible && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
            <div className="p-4 border-b"> Admin</div>
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={handleLogout} 
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
