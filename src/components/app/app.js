import React from 'react';

import AppHeader from '../app-header'
import AppSearch from '../app-search'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'

import './app.css';

const App = () => {

	const todoData = [
		{label: "Get coffee", important: false, id: '1'},
		{label: "Build App", important: true, id: '2'},
		{label: "Get Rest", important: false, id: '3'}
	]

	return (
		<div className="todo-app">
			<AppHeader toDo={1} done={3} />

			<div className="top-panel d-flex">
				<AppSearch />
				<ItemStatusFilter />
			</div>
			
			<TodoList todos={todoData} />
		</div>
	)
}

export default App