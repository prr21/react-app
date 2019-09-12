import React, {Component} from 'react';
import './app-search.css';

export default class AppSearch extends Component{

	changeLabel = (e) => {
		const searchLetter = e.target.value.toLowerCase();

		this.props.searchItem(searchLetter);
	}

	render(){
		return (
			<input className="form-control search-input" 
				placeholder="search"
				onChange={this.changeLabel}
			/>
		)
	}
	
}