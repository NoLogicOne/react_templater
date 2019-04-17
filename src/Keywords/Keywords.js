import React from 'react';

import "./Keywords.css";

const Keywords = ({isList, keys, onInputChange}) => {

	const creator = () => {
		return isList 
		? keys.map(key => {
			return ( 
				<label key={key.value} htmlFor="">
					<input type="checkbox"
						   onChange={e => onInputChange(key.value)}
						   checked={key.checked}/>
					<span>{key.value}</span>
				</label>
			)
		})
		: <textarea name="keywords" id="" cols="30" rows="10"/>
	}

	return (
		<div className="templater__keywords">
			{creator()}
		</div>
	)
}

export default Keywords;