import logo from './logo.svg';
import './App.css';
import React from 'react';
import Akciger from './components/Akciger';
import Basboyun from './components/Basboyun';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div className="main">
        {/* <Akciger /> */}
        <Basboyun />
      </div>
    )
  }
}

export default App;
