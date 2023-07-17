import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/grant_access">Grant Access</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
