import React, { Component } from 'react';


class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state =({
			term:'h'
		})
	}
	render() {
		return <input 
			value={this.state.term}
			onChange={(e) => this.onInputChange(e.target.value)}
			/>
	}

	onInputChange(event) {
		this.setState({term: event})
		console.log(this.state.term)
	}
}

export default SearchBar;