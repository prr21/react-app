import React from 'react'
import ReactDom from 'react-dom';

import AppHeader from './components/app-header'
import AppSearch from './components/app-search'
import TodoList from './components/todo-list'

const App = () => {

	const todoData = [
		{label: "Get coffee", important: false, id: '1'},
		{label: "Build App", important: true, id: '2'},
		{label: "Get Rest", important: false, id: '3'}
	]

	return (
		<div>
			<AppHeader />
			<AppSearch />
			<TodoList todos={todoData} />
		</div>
	)
}

ReactDom.render(<App />, document.getElementById('root'));