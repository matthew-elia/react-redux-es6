import React, {PropTypes} from 'react';  
import { Link, IndexLink } from 'react-router';  
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';  
import * as userActions from '../../actions/userActions';

class Header extends React.Component {  

  constructor(props) {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    this.props.actions.logoutUser();
  }

  render() {
	    if (this.props.logged_in) {
	      return (
	        <nav>
	          <IndexLink to="/" activeClassName="active">Home</IndexLink>
	          {" | "}
	          <Link to="/users" activeClassName="active" >Users</Link>
	          {" | "}
	          <a href="/logout" onClick={this.logout}>Log Out</a>
	        </nav>
	      );
	    } else {
	      return (
	        <nav>
	          <IndexLink to="/" activeClassName="active">Home</IndexLink>
	          {" | "}
	          <Link to="/login" activeClassName="active">Log In / Register</Link>
	        </nav>
	      );
	    }
	  }
	}

Header.propTypes = {  
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {  
  return {logged_in: state.logged_in};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);