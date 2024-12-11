import React from 'react';
import { useNavigate } from 'react-router-dom';
const UserList = () => {
  // Expanded data for users
  const users = [
    { id: 1, name: 'Hitesh ', email: 'hitesh@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Aakash ', email: 'aakash@example.com', role: 'Admin', status: 'Active' },
    { id: 3, name: 'Lokesh Sharma', email: 'lokesh@example.com', role: 'Admin', status: 'Active' },
    { id: 4, name: 'test', email: 'test@example.com', role: 'test', status: 'Inactive' },
   
  ];
  const navigate = useNavigate(); 

  const handleAddRole = () => {
    navigate('/add-user'); 
  };
  return (
    <div className="p-4 bg-white min-h-screen">
      <h1 className="text-2xl font-semibold text-center mb-4">User List</h1>
      <button
          onClick={handleAddRole}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add User
        </button>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-gray-800">
              <th className="border border-gray-300 px-6 py-3">ID</th>
              <th className="border border-gray-300 px-6 py-3">Name</th>
              <th className="border border-gray-300 px-6 py-3">Email</th>
              <th className="border border-gray-300 px-6 py-3">Role</th>
              <th className="border border-gray-300 px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-100 transition-colors"
              >
                <td className="border border-gray-300 px-6 py-3">{user.id}</td>
                <td className="border border-gray-300 px-6 py-3">{user.name}</td>
                <td className="border border-gray-300 px-6 py-3">{user.email}</td>
                <td className="border border-gray-300 px-6 py-3">{user.role}</td>
                <td
                  className={`border border-gray-300 px-6 py-3 ${
                    user.status === 'Active'
                      ? 'text-green-600 font-semibold'
                      : 'text-red-600 font-semibold'
                  }`}
                >
                  {user.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
