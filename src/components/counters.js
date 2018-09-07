import React, {Component} from 'react'
import {Counter} from './counter'

export default class Counters extends Component {
	render() {
		const {counters, onReset, onDelete, onIncrement, onDecrement} = this.props
		return (
			<React.Fragment>
				<button className="btn btn-primary btn-sm m-2"
					onClick={onReset}>
					Reset
				</button>
				{ counters.map(counter =>
					<Counter key={counter.id}
						counter={counter}
						onDelete={onDelete}
						onDecrement={onDecrement}
						onIncrement={onIncrement}/>
				)}
			</React.Fragment>
		)
	}
}
