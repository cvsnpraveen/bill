import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Nav from './Components/Nav';
import DataGrid from './Components/DataGrid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>

        <DataGrid></DataGrid>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
