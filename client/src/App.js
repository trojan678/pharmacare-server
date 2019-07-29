import React from 'react';
import Navbar from 'Navbar';
import Druglist from 'Druglist';
import './App.css';

function App() {
  return (
    <div className="drgls-app">
      <header className="drgls-header">
        <Navbar/>
      </header>
      <main className="drgls-main">
        <Druglist Drugslisted={DRUGS_LISTED} /> 
      </main>
    </div>
  );
}

export default App;
