import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Toggle from './Toggle';
import Counter from './Counter';
import MainContent from './MainContent';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Toggle/>
        <Sidebar />
          <MainContent/>
          <Form/>
        <main>
          <Counter/>
          const { readFilesConcurrently } = require('./fileReader');
        const filePathsFile = 'filePaths.txt'; // Adjust to your file path
          readFilesConcurrently(filePathsFile);

          <Content1 />
          <Content2 />
          <Content3 />
        </main>
      </div>
    </div>
  );
}

export default App;
