import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
	return (
		<div id="scroll" style={{overflowY: 'scroll', height: '500px'}}>
			{props.children}
		</div>
	)
}

export default Scroll;