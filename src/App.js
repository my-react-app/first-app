import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <span>header</span>
      </header>
      <main className="main">
        <aside className="aside">
          <span>aside</span>
        </aside>
        <div className="content">
          <span>content</span>
        </div>
      </main>
    </div>
  );
}

export default App;