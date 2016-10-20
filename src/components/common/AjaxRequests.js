import React, {PropTypes} from 'react';

class AjaxRequests extends React.Component {
	constructor(props, context){
		super(props, context);
		this.state = {frame: 1};
	}
	
	componentDidMount() {
		// fetch("http://api.s3curity-api.dev/v1/users").then((response)=> {
		// 	console.log(response.json());
		// });
	}

}

export default AjaxRequests;