// src/components/AdminApp.js

import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import GrantAccess from './components/GrantAccess';
import AdminConsole from './components/AdminConsole';



const AdminApp = () => {
  return (
    <>
  
    <Routes>
      <Route path='/' element={<AdminConsole />} />
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
    <Route path="/admin/grant_access" element={<GrantAccess />} />
    <Route path="/admin/login" element={<AdminLogin />} />
  </Routes>
  </>
  );
};

export default AdminApp;
