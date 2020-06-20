import React, { Component } from 'react';
import './App.css';


function App() {
  return (
    <Counter></Counter>
  )
}

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  handlePlusBtn = () => {
    this.setState({ count: this.state.count + 1 })
  }
  handleMinusBtn = () => {
    this.setState({ count: this.state.count -1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>conut: { this.state.count }</div>
        <button onClick={this.handlePlusBtn}>+1</button>
        <button onClick={this.handleMinusBtn}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
