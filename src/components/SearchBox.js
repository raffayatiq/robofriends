import React from 'react';

const SearchBox = ({ searchfield, onSearchChange}) => {
	return (
		<div className='pa1 pb4 bb bw2 b--green'>
			<input 
			className='pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='search robots'
			onChange={onSearchChange} 
			/>
		</div>
	)
}

export default SearchBox;