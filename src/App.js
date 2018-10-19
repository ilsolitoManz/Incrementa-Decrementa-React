import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state={
    counter:0
  }

  changeCounter = (x)=>{
    this.setState({counter:this.state.counter+x});
  }

  render() {
    return (
      <div className="App">
        {this.state.counter}
        <br/><button onClick={()=>{this.changeCounter(1)}}>Incrementa</button>
        <button onClick={()=>{this.changeCounter(-1)}}>Decrementa</button>
      </div>
    );
  }
}

export default App;
