import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Nav from './Components/Nav';
import DataGrid from './Components/DataGrid';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

    this.onChange = (e, t) => {
      const newState = { ...this.state };
      let { name, value } = e.target;

      if (t === 'check') {
        let elem = document.getElementById(newState.data[name].number);
        newState.data[name].choosen = !newState.data[name].choosen;

        { elem && elem.focus() }
        { elem && elem.select() }
      }
      if (t === 'text') {
        newState.data[name].installment = value;
      }

      this.setState({
        data: newState.data
      })
    }

  }
  componentDidMount() {
    axios.get('./files/data.json')
      .then((res) => this.setState({ data: res.data }));
  }

  render() {
    const gridData = this.state.data;
    return (
      <div className="App">
        <Nav></Nav>
        <DataGrid data={gridData} onChange={this.onChange} ></DataGrid>
      </div>
    );
  }
}

export default App;
