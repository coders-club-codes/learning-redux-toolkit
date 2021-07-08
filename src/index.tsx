import React from 'react';
import ReactDOM from 'react-dom';

import { globalStyles } from './styles';
import App from './App';

globalStyles();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
