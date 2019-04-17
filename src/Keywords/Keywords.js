import React from 'react';

const Keywords = ({isList, keys}) => {

	const creator = () => {
		return isList 
		? keys.map(key => {
			return (<div key={key.value}>
				<input type="checkbox" checked={key.checked}/>
				<span>{key.value}</span>
			</div>)
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