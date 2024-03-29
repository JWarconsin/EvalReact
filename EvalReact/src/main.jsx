import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css';
import { RouterProvider } from "react-router-dom";
import router from "./routes/root";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)