import React, {PropTypes} from 'react';
import TextInput from './TextInput';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';
import auth from '../../auth/authentic';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {credentials: {email: '', password: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
   	event.preventDefault();
    this.props.actions.loginUser(this.state.credentials);
  }

  render() {

  	if(!auth.loggedIn()) {

	    return (
	      <div className="col-xs-6 col-xs-offset-3">
	        <form className="text-center">
	          <TextInput
	            name="email"
	            placeholder="e-mail"
	            value={this.state.credentials.email}
	            onChange={this.onChange}
	            ></TextInput>

	          <TextInput
							name="password"
							placeholder="password"
	            type="password"
	            value={this.state.credentials.password}
	            onChange={this.onChange}
	            ></TextInput>

	          <input
	            type="submit"
	            className="btn btn-default btn-lg"
	            onClick={this.onSave}/>
	        </form>
	      </div>
	  	);

		} else { return (<div></div>) }
	
	}	

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(LoginPage);