import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import './fonts/Gilroy-Bold.ttf';
import './fonts/Gilroy-ExtraBold.ttf';
import './fonts/Gilroy-Heavy.ttf';
import './fonts/Gilroy-Light.ttf';
import './fonts/Gilroy-Medium.ttf';
import './fonts/Gilroy-Regular.ttf';
import './fonts/Gilroy-SemiBold.ttf';
import './fonts/Gilroy-Thin.ttf';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
