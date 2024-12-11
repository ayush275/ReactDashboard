import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleList = () => {
  // Sample data for roles
  const roles = [
    { id: 1, role: 'Admin', description: 'Admin',status: 'Active' },
    { id: 2, role: 'Manager', description: 'Manager',status: 'Inactive' },
    { id: 3, role: 'Operator', description: 'Operator',status: 'Inactive' },
    { id: 4, role: 'test', description: 'test',status: 'Active' },
  ];
  const navigate = useNavigate(); 

  const handleAddRole = () => {
    navigate('/add-role'); 
  };
  return (
    <div className="p-4 bg-white min-h-screen"> 
      <h1 className="text-2xl font-semibold text-center mb-4">Role List</h1>
      <button
          onClick={handleAddRole}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Role
        </button>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{role.id}</td>
                <td className="border border-gray-300 px-4 py-2">{role.role}</td>
                <td className="border border-gray-300 px-4 py-2">{role.description}</td>
                <td
                  className={`border border-gray-300 px-6 py-3 ${
                    role.status === 'Active'
                      ? 'text-green-600 font-semibold'
                      : 'text-red-600 font-semibold'
                  }`}
                >
                  {role.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoleList;
