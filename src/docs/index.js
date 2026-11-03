import React from 'react';
import { createRoot } from 'react-dom/client';
import '@mapbox/mbx-assembly/dist/assembly.css';
import '@mapbox/mbx-assembly/dist/assembly.js';
import App from './app';
import './prism-theme.css';

const container = document.createElement('div');
const root = createRoot(container);
document.body.appendChild(container);
root.render(<App />);
