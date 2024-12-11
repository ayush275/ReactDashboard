import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const navigate = useNavigate();
  const [loginName, setLoginName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [userStatus, setUserStatus] = useState(true); // true for Active, false for Inactive

  const handleSave = () => {
    alert(`User Saved!
      Login Name: ${loginName}
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Mobile: ${mobileNumber}
      DOB: ${dob}
      Address: ${address}
      Status: ${userStatus ? 'Active' : 'Inactive'}
    `);
    navigate('/user-list'); 
  };

  const handleBack = () => {
    navigate('/user-list'); 
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Add User</h1>
        <form>
          {/* Form Grid */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Login Name */}
            <div>
              <label htmlFor="loginName" className="block text-gray-700 mb-2">Login Name</label>
              <input
                id="loginName"
                type="text"
                value={loginName}
                onChange={(e) => setLoginName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter Login Name"
              />
            </div>

            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter First Name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter Last Name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter Email ID"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobileNumber" className="block text-gray-700 mb-2">Mobile Number</label>
              <input
                id="mobileNumber"
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter Mobile Number"
              />
            </div>

            {/* DOB */}
            <div>
              <label htmlFor="dob" className="block text-gray-700 mb-2">Date of Birth</label>
              <input
                id="dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Address */}
            <div className="col-span-2">
              <label htmlFor="address" className="block text-gray-700 mb-2">Address</label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter Address"
              />
            </div>

            {/* User Status */}
            <div className="flex items-center">
              <label htmlFor="userStatus" className="text-gray-700 mr-4">Status</label>
              <div
                className={`cursor-pointer p-2 rounded-lg ${
                  userStatus ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
                }`}
                onClick={() => setUserStatus(!userStatus)}
              >
                {userStatus ? 'Active' : 'Inactive'}
              </div>
            </div>
          </div>

          {/* Save and Back Buttons */}
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

export default AddUser;
