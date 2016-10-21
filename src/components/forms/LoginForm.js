import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';

class LoginForm extends React.Component {
	constructor(props, context){
		super(props, context);
	}

	render() {
		return (
			<div id="loginContainer" className="container">
         	<div className="col-xs-6 col-xs-offset-3">
		      <form className="form-signin" id="loginForm">
		        <input type="email" id="inputEmail" className="" placeholder="Email address" required autofocus/>
		        <input type="password" id="inputPassword" className="" placeholder="Password" required />
		        {/*<input type="hidden" id="inputToken" value={process.env.token}/>*/}
		       	{/*<div id="rememberMeCheckbox" className="checkbox">
		        	<label className="pull-right"><input type="checkbox" value="remember-me"/>  Remember Me</label>
		        </div>*/}
		        <br/>
		        <br/>
		        <br/>
		        <pre>{this.context.text}</pre>
		        <button className="btn btn-lg btn-danger btn-block"
		        	type="submit"
		        	onClick={(e) => {e.preventDefault();this.props.actions.loginUserAttempt()}}>Sign in</button>
		      </form>
	      </div>
	    </div> 
		);
	}
}

LoginForm.propTypes = {
	users: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		users: state.users
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);


 