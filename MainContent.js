import React from 'react';


const MainContent = (props) => {
  const dataFromSidebar = props.data;

  return (
    <div class="MainContent">
      <h2>Login</h2>
      <p> {dataFromSidebar}</p>
    </div>
  );
};

export default MainContent;