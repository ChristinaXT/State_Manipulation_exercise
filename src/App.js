import React, { Component } from 'react';
import Button from './components/Button';
import './App.css';

class App extends Component {

   state = {
     count: 0
   }

incrementCount= () => {
  this.setState(prevState => {
    return {
        count:prevState.count + 1
    }
  })
}

decrementCount= () => {
  this.setState(prevState => {
    return {
      count:prevState.count - 1
    }
  })
}

render() {

  const { count } = this.state
  return (
    <div className="container">

      <h2>Counter A: { this.state.count } </h2>
    <Button A
        title = { "+" }
        action = { () => this.incrementCount() }
      />
    <Button A
        title = { "-" }
        action = { () => this.decrementCount() }
      />

    <h2>Counter B: { this.state.count } </h2>
      <Button B
        title = { "+" }
        action = { () => this.incrementCount() }
      />
    <Button B
        title = { "-" }
        action = { () => this.decrementCount() }
      />

    <h2>Counter C: { this.state.count } </h2>
      <Button C
        title = { "+" }
        action = { () => this.incrementCount() }
      />
    <Button C
        title = { "-" }
        action = { () => this.decrementCount() }
      />


     </div>
  );
}

}
export default App
