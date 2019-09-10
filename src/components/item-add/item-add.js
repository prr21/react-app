import React from 'react';

import './item-add.css';

const ItemAdd = ({onItemAdd}) => {

	return( 
		<div className="text-right mt-2">
			<button 
				className="btn btn-outline-primary"
				onClick={ () => onItemAdd('text')}>
					Добавить дело
			</button>
		</div>
	)
}

export default ItemAdd