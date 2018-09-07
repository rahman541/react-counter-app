import React, {Component} from 'react'
import {Counter} from './counter'

export default class Counters extends Component {
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
				<button className="btn btn-primary btn-sm m-2"
					onClick={this.handleReset}>
					Reset
				</button>
				{ counters.map(counter =>
					<Counter key={counter.id}
						counter={counter}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}/>
				)}
			</React.Fragment>
		)
	}
}
