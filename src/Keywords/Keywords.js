import React from 'react';

import "./Keywords.css";

const Keywords = ({import_area, onInputChange}) => {

	const creator = () => {
		return (
			<textarea name="keywords" 
					  id="" 
					  cols="30" 
					  rows="10"
					  value={import_area}/>
		)
	}

	return (
		<div className="templater__keywords">
			{creator()}
		</div>
	)
}

export default Keywords;