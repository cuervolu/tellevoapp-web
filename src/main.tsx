import React from 'react';
import {createRoot} from 'react-dom/client';
import { TeLlevoApp } from './TeLlevoApp';

import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TeLlevoApp />
  </React.StrictMode>
)
