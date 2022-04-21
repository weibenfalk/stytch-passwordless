import { createRoot } from 'react-dom/client';
import { StytchProvider, initStytch } from '@stytch/stytch-react';
// Components
import App from './App';

const STYTCH_PUBLIC_TOKEN = 'public-token-test-5c0bf5cb-3621-43e0-8456-149afc265e49';
const stytch = initStytch(STYTCH_PUBLIC_TOKEN);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  <StytchProvider stytch={stytch}>
    <App />
  </StytchProvider>
  // </React.StrictMode>
);
