import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './Pages/Dashboard';
import LoginPage from './Pages/LoginPage';
import UserList from './Pages/UserList';
import RoleList from './Pages/RoleList';
import AddRole from './Pages/AddRole';
import AddUser from './Pages/AddUser';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
  };

  return (
    <Router>
      <div className="h-screen flex flex-col">
       
        {!isLoggedIn ? (
          <LoginPage onLogin={handleLogin} />
        ) : (
          <>
            <Header onLogout={handleLogout} />
            {/* Main Content with Sidebar */}
            <div className="flex flex-1">
              {/* Sidebar */}
              <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} onLogout={handleLogout} />

              {/*Body*/}
              <div className="flex-1">
                {/* Routes */}
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/user-list" element={<UserList />} />
                  <Route path="/role-list" element={<RoleList />} /> 
                  <Route path="/add-role" element={<AddRole />} /> 
                  <Route path="/add-user" element={<AddUser />} /> 
                </Routes>
              </div>
            </div>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
