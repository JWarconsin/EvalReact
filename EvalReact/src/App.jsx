import React from 'react';
// import HomePage from './pages/home'; 
import './css/style.css';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
