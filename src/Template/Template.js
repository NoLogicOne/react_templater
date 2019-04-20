import React from 'react';
import './Template.css';

const Template = ({template, onChange}) => {

	return (
		<div className="templater__template">
			<input className="templater__template_input"
				   value={template}
				   onChange={e => onChange(e.target.value)}
				   />
	    	<span className="templater__template_length">
	    		{template
	    			.replace(/#/g, "")
					.trim()
	    			.length
	    		}
	    	</span>
	    	<input type="submit" 
	    		   value="MIX"
	    		   onSubmit={e => e}
	    	       className="templater__template_mix"/>
		</div>
	);
  
}

export default Template;