import React from 'react';
import { Link } from "react-router-dom";

function LeftNav() {
  const currentLocation = window.location.pathname;
  return (
    <div className="leftmenu">
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li className={currentLocation === '/' ? 'active' : ''}><Link to="/">Dashboard</Link></li>
        <li className={currentLocation === '/users' ? 'active' : ''}><Link to="/users">Users</Link></li>
        <li className={currentLocation === '/categories' ? 'active' : ''}><Link to="/categories">Categories</Link></li>
        <li className={currentLocation === '/products' ? 'active' : ''}><Link to="/products">Products</Link></li>
        <li className={currentLocation === '/contact' ? 'active' : ''}><Link to="/contact">Contact</Link></li>
        <li className={currentLocation === '/queries' ? 'active' : ''}><Link to="/queries">Queries</Link></li>
        <li className={currentLocation === '/profile' ? 'active' : ''}><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  )
};

export default LeftNav;