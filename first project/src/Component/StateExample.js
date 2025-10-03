import React, { Component } from "react";
class StateExample extends Component{
	constructor(props)
	{
		super(props);
		this.state={count:0};
	}
	render()
	{
		return(
			<div>
			<h2>{this.state.count}</h2>
			<button onClick={() => this.setState({count: this.state.count + 1})}>Click me 
			</button>
			</div>
			);
		}
	}
		export default StateExample