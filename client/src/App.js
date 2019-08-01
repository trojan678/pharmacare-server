import React from 'react';
import Navbar from './Navbar';
import Druglist from './Druglist';
import { Router } from "@reach/router";
import SearchDetails from "./SearchDetails";
import Admin from "./Admin";
import NotFound from "./NotFound";
import './App.css';

function App() {
  return (
    <div className="drgls-app">
      <header className="drgls-header">
        <Navbar />
      </header>
      <main className="drgls-main">
        <Router>
          <Druglist path="/" />
          <SearchDetails path="/chemist/:chemistId" />
          <Admin path="/admin" />
          <NotFound default />
        </Router>
      </main>
    </div>
  );
}

export default App;
