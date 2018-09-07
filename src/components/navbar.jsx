import React, {Component} from 'react'

// Stateless Functional Component
const Navbar = props => {
	const {totalCounters} = props
	return (
		<nav className="navbar navbar-light bg-light">
		  <a className="navbar-brand" href="#">
		  	Navbar <span className="span badge badge-pill badge-secondary">{totalCounters}</span>
	  	</a>
		</nav>
	)
}

export default Navbar