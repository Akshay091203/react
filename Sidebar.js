
import React, {} from 'react';




function Sidebar({ isOpen }) {
  const data = 'Data from Sidebar is :';
  return (
    
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
         <div>
      {}
    </div>

        <p class="buttons">Dashboard</p>
        <p class="buttons">Contact</p>
        <p class="buttons">About</p>
        
          </div>
  );
};



export default Sidebar;
