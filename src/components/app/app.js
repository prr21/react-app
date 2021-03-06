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
		],
		term : '',
		filterStat: 'all'
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

	searchItems = (searchLetter) => {
		this.setState(() => {
			return {term: searchLetter}
		})
	}

	changeStatus = (status) => {
		this.setState(() => {
			return {filterStat: status}
		})
	}

	applyFilter(arr){
		let {filterStat} = this.state

		if (filterStat === 'done') {
			arr = arr.filter( (item) => (
				item.done
			));

		} else if (filterStat === 'active'){
			arr = arr.filter( (item) => (
				!item.done
			));
		}
		return arr;
	}

	render(){
		const {todoData, term, filterStat} = this.state

		const doneCount = todoData.filter( (el) => el.done).length;
		const toDoCount = todoData.length - doneCount

		let visibleItems = todoData.filter( (item) => (
			item.label.toLowerCase()
				.indexOf(term) !== -1
			))

		visibleItems = this.applyFilter(visibleItems)


		return (
			<div className="todo-app">
				<AppHeader 
					toDo={toDoCount} 
					done={doneCount}
				/>

				<div className="top-panel d-flex">
					<AppSearch 
						todos={todoData}
						searchItem={this.searchItems}
					/>
					<ItemStatusFilter
						status={filterStat}
						changeStatus={this.changeStatus}
					/>
				</div>
				
				<TodoList
					todos={visibleItems}
					deleteItem={ this.makeDelete }
					toggleImportant={ this.toggleImportant }
					toggleDone={ this.toggleDone }
				/>
				<ItemAdd onItemAdd={ this.onItemAdd }/>
			</div>
		)
	}
}