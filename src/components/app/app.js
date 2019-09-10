import React, { Component } from 'react';

import AppHeader from '../app-header'
import AppSearch from '../app-search'
import ItemAdd from '../item-add'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'

import './app.css';

export default class App extends Component {

	maxId = 100;

	state = {
		todoData: [
			{label: "Get coffee", important: false, id: '1'},
			{label: "Build App", important: true, id: '2'},
			{label: "Get Rest", important: false, id: '3'}
		]
	}

	makeDelete = (id) => {
		this.setState( ({todoData}) => {
			let index = todoData.findIndex( (el) => el.id === id );

			return ({
				todoData: [...todoData.slice(0, index), ...todoData.slice(index+1)]
			})
		})
	}

	onItemAdd = (text) =>{
		const newItem = {
			label: text,
			important: false,
			id: this.maxId++
		}

		this.setState( ({todoData}) => {

			return ({
				todoData: [...todoData, newItem]
			})
		})
	}

	render(){
		const {todoData} = this.state

		return (
			<div className="todo-app">
				<AppHeader toDo={1} done={3} />

				<div className="top-panel d-flex">
					<AppSearch />
					<ItemStatusFilter />
				</div>
				
				<TodoList
					todos={todoData}
					deleteItem={ this.makeDelete }
				/>
				<ItemAdd onItemAdd={ this.onItemAdd }/>
			</div>
		)
	}
}