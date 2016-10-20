 import React, {PropTypes} from 'react';
 import {connect} from 'react-redux';
 import {bindActionCreators} from 'redux';
 import * as userActions from '../../actions/userActions';

class UsersPage extends React.Component {
	constructor(props, context){
		super(props, context);
	}

	userRow(user, index) {
		return <div key={index}><p className="userRowContent">{index+1}. {user.name} - {user.email}</p><hr/></div>; 
	}

	render() {
		return (
			<div>
				<div className="page-header">
				<h1>Users</h1>
				</div>
				{this.props.users.map(this.userRow)} 
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