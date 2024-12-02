import React from 'react';
import './App.css';
import logo from './Holberton-logo.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Holberton-logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
        </header>
          <div className="App-body">
          <p>Login to access the full dashboard</p>
          </div>
          <div className="App-footer">
          <p>Copyright 2020 - holberton School</p>
        </div>
    </div>
    );
}

export default App;
