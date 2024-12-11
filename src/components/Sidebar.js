import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [expandedModule, setExpandedModule] = useState(null);

  // Handle submodule toggling
  const handleModuleClick = (module) => {
    setExpandedModule(expandedModule === module ? null : module);
  };
  const navigate = useNavigate();
  return (
    <div className="relative h-full">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'w-64' : 'w-0'
        } bg-gray-800 text-white h-full flex flex-col transition-all duration-300 overflow-hidden`}
      >
        <nav className="flex-1">
          <div
            className="p-4 hover:bg-gray-700 cursor-pointer"
            onClick={() => navigate('/')} // Navigate to Dashboard on click
          >
            Dashboard
          </div>

          {/* Admin Module with Submodules */}
          <div className="p-4 hover:bg-gray-700 cursor-pointer flex justify-between items-center"
            onClick={() => handleModuleClick('Admin')}
          >
            <span>Admin</span>
            {expandedModule === 'Admin' ? (
              <FaChevronDown size={16} />
            ) : (
              <FaChevronRight size={16} />
            )}
          </div>

          {/* Submodules */}
          {expandedModule === 'Admin' && (
            <div className="ml-6 text-sm">
              <div className="p-2 hover:bg-gray-600"  onClick={() => navigate('/user-list')}>Users</div>
              <div className="p-2 hover:bg-gray-600" onClick={() => navigate('/role-list')}>Role</div>
              <div className="p-2 hover:bg-gray-600">Project</div>
            </div>
          )}
        </nav>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`absolute top-1/2 transform -translate-y-1/2 ${
          isOpen ? 'right-[-12px]' : 'left-0'
        } bg-blue-600 text-white p-2 rounded-full shadow focus:outline-none transition-all`}
      >
        {isOpen ? <FaAngleLeft size={20} /> : <FaAngleRight size={20} />}
      </button>
    </div>
  );
};

export default Sidebar;
