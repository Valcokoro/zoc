import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavigationProvider } from './contexts/navigation';
import { BrowserRouter } from 'react-router-dom';


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
<NavigationProvider>
    <App />
</NavigationProvider>

)





