import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import withMouse from './component/withMouse';
import withMeasureTime from './component/withMeasureTime';
import fetchData from './component/fetchData';

const Content = () => 
  <div style={{backgroundColor: 'red', color: 'yellow'}}>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>

console.log('Fetch...1')
const HocFetch = fetchData('https://swapi.co/api/people/1')(withMouse(Content))
console.log(HocFetch)
const HOComponent = withMeasureTime(HocFetch)

class App extends Component {

  componentDidMount() {
    console.log('Starting APP...');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        </header>
        <HOComponent />
      </div>
    );
  }
}

export default App;
