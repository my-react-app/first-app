import React from 'react';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <>
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
      </>
    )
  }
}