import React, {Component} from 'react'

export class Counter extends Component {
	state = {
		value: this.props.value,
	}

	handleIncrement = () => {
		this.setState({value: this.state.value+1})
	}

	render() {
		return (
			<div>
				<span className={this.getBadgeClassess()}>
					{this.formatCount()}
				</span>
				<button onClick={() => this.handleIncrement({id: 1})}
					className="btn btn-secondary btn-sm">
					Increment
				</button>
			</div>
		)
	}

	getBadgeClassess() {
		let classes = "badge m-2 badge-"
		classes += this.state.value === 0 ? 'warning' : 'primary'
		return classes
	}

	formatCount() {
		const {value} = this.state
		return value === 0 ? 'Zero' : value
	}
}