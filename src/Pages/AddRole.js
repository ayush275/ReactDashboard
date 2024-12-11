import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRole = () => {
  const navigate = useNavigate();
  const [roleName, setRoleName] = useState('');
  const [roleDescription, setRoleDescription] = useState('');
  const [status, setStatus] = useState('Active');

  const handleSave = () => {
    // Add logic to save role details
    alert(`Role Saved!\nName: ${roleName}\nDescription: ${roleDescription}\nStatus: ${status}`);
    navigate('/role-list'); 
  };

  const handleBack = () => {
    navigate('/role-list'); 
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Add Role</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="roleName" className="block text-gray-700 mb-2">Role Name</label>
            <input
              id="roleName"
              type="text"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter Role Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="roleDescription" className="block text-gray-700 mb-2">Role Description</label>
            <input
              id="roleDescription"
              type="text"
              value={roleDescription}
              onChange={(e) => setRoleDescription(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter Role Description"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="status" className="block text-gray-700 mb-2">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRole;
