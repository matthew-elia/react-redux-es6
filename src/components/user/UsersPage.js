 import React, {PropTypes} from 'react';
 import {connect} from 'react-redux';
 import {bindActionCreators} from 'redux';
 import * as userActions from '../../actions/userActions';

class UsersPage extends React.Component {
	constructor(props,context) {
    super(props,context);
    this.state = {user: {id:''}};
    // this.deleteUser = this.deleteUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  removeUser(index,event) {
  	index = event.target.key;
  	const user = this.state.user;
  	user[index] = event.target.value;
	  return this.setState({
	    user: this.state.user.parent().filter((_, i) => i !== index)
	  }).then((deleted)=>{
	  	console.log(deleted);
    	this.props.actions.deleteUser(user);
	  });
	}

	userRow(user, index) {
		return <li key={index} className="userRowContent"> {user.email} &nbsp;<span key={index} value={user.id} className="fa fa-trash" onClick={(index)=>{this.removeUser}}></span></li>; 
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<h1>
							<code id="UserCount" className="pull-left">{this.props.users.length.toString()}</code>		
							<big className="pull-right">.:US3R$:.</big>
						</h1>
						<div className="clearfix"></div> 
						<hr/>
					</div>
					<div className="col-xs-12">
						<ul className="list-unstyled">{this.props.users.map(this.userRow)}</ul>
					</div>
				</div>
			</div>
		);
	}
}

UsersPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);