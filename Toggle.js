import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import Sidebar from './Sidebar';

function Toggle() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Button onClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
    </div>
  );
}

export default Toggle;
