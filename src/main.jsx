/**
 * @copyright 2025 gmaarieta
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * Components
 */
import App from './App';

/**
 * CSS link
 */
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
