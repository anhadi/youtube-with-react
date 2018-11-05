import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar'
import API_KEY from './api-key';

class Name extends Component {
	render(){
		return (
			<div><SearchBar />
			<p>{API_KEY}</p>
			<Name2 />

			</div>
		)
	}
}

const Name2 = () => {
	return (
		<div>hi</div>
	)
}
 
ReactDOM.render(<Name />, document.querySelector('.container'));