import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import DataContextProvider from '@/context/dataContext/DataContext.jsx';
import { AuthContextProvider } from './context/authContext/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DataContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DataContextProvider>
  </BrowserRouter>,
);
