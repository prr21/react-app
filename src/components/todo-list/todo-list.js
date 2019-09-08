import React from 'react';

import TodoListItem from '../todo-list-item'

const TodoList = ( {todos} ) => {

	const elements = todos.map((item) => {

		const {id, ...elem} = item;

		return (
			<li key={id} className="list-group-item">
				<TodoListItem {...elem} />
			</li>
		)
	});

	return (
		<ul className="list-group todo-list">
			{elements}
		</ul>
	)
}

export default TodoList