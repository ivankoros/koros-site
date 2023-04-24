import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <div className='bg-slate-300 w-screen h-screen max-h-screen max-w-screen overflow-hidden object-contain'>
    <App/>
    </div>

  </StrictMode>
);
