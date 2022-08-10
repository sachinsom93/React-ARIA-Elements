import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { OverlayProvider } from 'react-aria';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <OverlayProvider>
      <App />
    </OverlayProvider>
  </StrictMode>
);
