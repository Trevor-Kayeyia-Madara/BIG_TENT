import React from "react";
import { Link } from "react-router-dom";


const AdminConsole = () => {
  return (
      <div>
        <p>Hello and Welcome to Admin Console</p>
        <Link to="/admin/login">
        <p>Please Log In</p>
        </Link>
      </div>
  );
};

export default AdminConsole;
