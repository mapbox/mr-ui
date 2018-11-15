import React from 'react';
import ReactDOM from 'react-dom';
import App from './docs/components/app';
import './docs/prism-theme.css';

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App />, container);
