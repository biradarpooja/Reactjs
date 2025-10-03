import React, { Component } from "react";
class Car extends Component{
	constructor(props){
		super(props);
		this.state={brand:"Ford",model:"mustang",color:"red",year:2020};
	}
	render(){
		return(
			<div>
			<h1>my{this.state.brand}</h1>
			<p>it is a {this.state.color } from {this.state.year}
			</p>
			</div>

		);
	}
}
export default Car;