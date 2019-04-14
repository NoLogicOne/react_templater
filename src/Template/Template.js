import React, { Component } from 'react';
import './Template.css';

const Templater = ({template, onChange}) => {

	return (
		<div className="templater__template">
			<input className="templater__template_input"
				   value={template}
				   onChange={e => onChange(e.target.value)}
				   />
	    	<div className="templater__template_length">
	    		{template.replace(/#/g, "").length}
	    	</div>
		</div>
	);
  
}

export default Templater;