import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import AuthProvider from './context/AuthContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
