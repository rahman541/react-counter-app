import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters'

class App extends Component {
  state={
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 1},
      {id: 3, value: 2},
      {id: 4, value: 3},
    ]
  }
  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id )
    this.setState({counters})
  }
  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++
    this.setState({counters})
  }
  handleReset = id => {
    const counters = this.state.counters.map(c => c.value = 0 )
    this.setState({counters})
  }

  render() {
    const {counters} = this.state
    return (
      <React.Fragment>
      <Navbar totalCounters={counters.filter(c=>c.value>0).length} />
      <main className="container">
        <Counters
          counters={counters}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
        />
      </main>
      </React.Fragment>
    );
  }
}

export default App;
