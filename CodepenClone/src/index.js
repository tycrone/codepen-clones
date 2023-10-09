import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import App from './components/App';
import {AuthProvider} from './components/contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
