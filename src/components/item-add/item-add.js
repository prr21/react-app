import React, {Component} from 'react';

import './item-add.css';

export default class ItemAdd extends Component {

	constructor(props){
		super()

		this.state = {
			label : ''
		}

		this.submitForm = (e) => {
			e.preventDefault()
			this.props.onItemAdd(this.state.label)
		}

		this.changeInp = (e) => {
			this.setState({
				label: e.target.value
			})
		}
	}

	render(){
		return(

			<form 
				className="d-flex mt-2"
				onSubmit={ this.submitForm }
				>
				<input
					className="form-control mr-1"
					placeholder='Type a text'
					onChange={this.changeInp}
				/>

				<button className="btn btn-outline-primary">
					Добавить дело
				</button>
			</form>
		)
	}
}