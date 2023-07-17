import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminApp from './App';

ReactDOM.render(
<Router>
<React.StrictMode>
<AdminApp />
</React.StrictMode>
</Router>,
document.getElementById('root')
);

