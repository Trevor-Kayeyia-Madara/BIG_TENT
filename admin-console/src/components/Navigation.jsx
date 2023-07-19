import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <Link style={styles.brand} to="/admin/dashboard">
          Dashboard
        </Link>
        <button
          style={styles.navbarToggler}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span style={styles.navbarTogglerIcon}></span>
        </button>
        <div style={styles.collapse} id="navbarNav">
          <ul style={styles.navbarNav}>
            <li style={styles.navItem}>
              <Link style={styles.navLink} to="/admin/grant_access">
                Grant Access
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link style={styles.navLink} to="/admin/checkout">
                Checkout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

const styles = {
  navbar: {
    position:'fixed',
    background: '#f8f9fa',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    maxWidth: '960px',
    margin: '0 auto',
  },
  brand: {
    color: '#333',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginRight: '16px',
  },
  navbarToggler: {
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    padding: '8px',
  },
  navbarTogglerIcon: {
    display: 'inline-block',
    width: '20px',
    height: '2px',
    background: '#333',
  },
  collapse: {
    flex: '1',
    marginLeft: 'auto',
  },
  navbarNav: {
    display: 'flex',
    listStyle: 'none',
    margin: '0',
    padding: '0',
  },
  navItem: {
    marginLeft: '16px',
  },
  navLink: {
    color: '#333',
    fontSize: '14px',
    textDecoration: 'none',
    padding: '8px',
    borderRadius: '4px',
    transition: 'background 0.3s ease',
  },
};
