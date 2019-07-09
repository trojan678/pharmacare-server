import React from 'react';
import Navbar from 'Navbar';
import Druglist from 'Druglist';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <main className="mvls-main">
        <Druglist Drugslisted={DRUGS_LISTED} /> 
      </main>
    </div>
  );
}

export default App;
