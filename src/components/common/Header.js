import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../../actions/sessionActions';
import auth from '../../auth/authentic';

class Header extends React.Component {
  constructor(props) {
    super();
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }

  render() {
    if (!auth.loggedIn()) {
      return (
      	<div className="container-fluid">
					<div className="row text-center">
			      <nav>
			        <IndexLink to="/" activeClassName="active"><span className="fa fa-bank"></span></IndexLink>
			      </nav>
			    </div>
				</div>
      );
    } else {
      return (
      	<div className="container">
	        <nav>
	      		<div className="row text-center">
		          {/*<IndexLink to="/" activeClassName="active">Home</IndexLink>*/}
		          <Link to="/users" activeClassName="active" className="pull-left"><span className="fa fa-users"></span></Link>
		          <a href="/" className="pull-right" onClick={this.logOut}><span className="fa fa-hand-peace-o"></span></a>
		    		</div>
        	</nav>
					{/*<div className="row text-center">
						<span className="fa fa-bank"></span>
					</div>*/}
				</div>
      );
    }
  }
}

Header.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {logged_in: state.session};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);