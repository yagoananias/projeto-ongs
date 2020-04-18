import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React.
        </p>
        <a
          className="App-link"
          href="https://yagoananias.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chama Nois
        </a>
      </header>
    </div>
  );
}

export default App;
