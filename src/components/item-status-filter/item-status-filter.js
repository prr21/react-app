import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

	buttons = [
		{name:'all', 	label: 'All'},
		{name:'active', label: 'Active'},
		{name:'done', 	label: 'Done'}
	]

	buttonClick = (status) => {
		this.props.changeStatus(status)
	}
    
    render(){
    	const { status } = this.props

    	const buttons = this.buttons.map(({name, label}) => {
    		let clazz = status === name? 'btn-info':'btn-outline-secondary';

			return (
				<button 
					onClick = {() => this.buttonClick(name)}
					className = {`btn ${clazz}`}
					key = {name}>
					{label}
				</button>
			)
		})

        return (
            <div className="btn-group">
        		{buttons}
            </div>
        )
    }
};