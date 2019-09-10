import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ done, important, label, deleteItem, toggleImportant, toggleDone }) => {

	let classNames = "todo-list-item";

	if (done) 	   
		classNames += ' done'
	if (important) 
		classNames += ' important'

	return (
		<span className={classNames}>
			<span 
				className="todo-list-item-label"
				onClick={ toggleDone }>
				{ label }
			</span>

			<button type="button"
	            className="btn btn-outline-success btn-sm float-right"
	            onClick={ toggleImportant }>
	        	<i className="fa fa-exclamation" />
	      	</button>

	      	<button type="button"
	            className="btn btn-outline-danger btn-sm float-right"
	            onClick={ deleteItem }>
	        	<i className="fa fa-trash-o" />
	      	</button>
	    </span>
	)
}
export default TodoListItem