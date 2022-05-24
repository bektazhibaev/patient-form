import logo from './logo.svg';
import './App.css';
import React from 'react';
import Akciger from './components/Akciger';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div className="main">
        <Akciger />
      </div>
    )
  }
}

export default App;
