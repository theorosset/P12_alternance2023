import React from 'react';
import ReactDOM from 'react-dom/client';
import router  from './app/router/router'
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom";
import Aside from './app/components/aside/Aside'
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Aside/>
    <RouterProvider router={router} />
  </React.StrictMode>
) ;


reportWebVitals();
