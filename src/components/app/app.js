import React, { Component } from 'react';

import AppHeader from '../app-header'
import AppSearch from '../app-search'
import ItemAdd from '../item-add'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'

import './app.css';

export default class App extends Component {

	maxId = 0

	state = {
		todoData: [
			this.createNewItem("Get coffee"),
			this.createNewItem("Build App"),
			this.createNewItem("Get Rest")
		]
	}

	makeToggle(arr, id, opt){
		let index = arr.findIndex( (el) => el.id === id );

		let newItem = {
			...arr[index], 
			[opt]: !arr[index][opt]
		};

		return [
			...arr.slice(0, index), newItem,
			...arr.slice(index+1)
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

	onItemAdd = (text) => {
		this.setState( ({todoData}) => {

			return ({
				todoData: [...todoData, this.createNewItem(text)]
			})
		})
	}

	toggleDone = (id) => {
		this.setState( ({todoData}) => {
			return ({
				todoData: this.makeToggle(todoData, id, 'done')
			})
		})
	}

	toggleImportant = (id) => {
		this.setState( ({todoData}) => {
			return ({
				todoData: this.makeToggle(todoData, id, 'important')
			})
		})
	}

	createNewItem(label){
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		}
	}

	render(){
		const {todoData} = this.state

		const doneCount = todoData.filter( (el) => el.done).length;
		const toDoCount = todoData.length - doneCount

		return (
			<div className="todo-app">
				<AppHeader 
					toDo={toDoCount} 
					done={doneCount}
				/>

				<div className="top-panel d-flex">
					<AppSearch />
					<ItemStatusFilter />
				</div>
				
				<TodoList
					todos={todoData}
					deleteItem={ this.makeDelete }
					toggleImportant={ this.toggleImportant }
					toggleDone={ this.toggleDone }
				/>
				<ItemAdd onItemAdd={ this.onItemAdd }/>
			</div>
		)
	}
}