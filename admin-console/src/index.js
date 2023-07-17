import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminApp from './App';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <Router>
    <React.StrictMode>
      <AdminApp />
    </React.StrictMode>
  </Router>
);


