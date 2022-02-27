import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from 'auth/AuthProvider';
import ReduxProvider from 'store/ReduxProvider';
import CustomThemeProvider from 'theme/CustomThemeProvider';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <Router>
        <AuthProvider>
          <CustomThemeProvider>
            <App />
          </CustomThemeProvider>
        </AuthProvider>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
