import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './i18n.ts';

import './App.css';
import App from './App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);