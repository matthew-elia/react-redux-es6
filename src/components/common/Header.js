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
      <nav>
        <div id="loginContainer" className="container-fluid">
          <div className="row text-center">
            <div className="col-xs-12">       
              <IndexLink to="/" activeClassName="active" onClick={(e)=>{e.preventDefault();alert('hey meh')}}><span className="fa fa-barcode"></span></IndexLink>
            </div>
          </div>
        </div>
      </nav>
      );
    } else {
      return (
      <nav>
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-xs-12">       
		          <Link to="/home" activeClassName="active"><span className="fa fa-anchor"></span></Link>
              <Link to="/users" activeClassName="active"><span className="fa fa-comment"></span></Link>
		          <Link to="/flights" activeClassName="active"><span className="fa fa-plane"></span></Link>
              <a href="/" className="pull-right" onClick={this.logOut}><span className="fa fa-hand-peace-o"></span></a>
		    		</div>
          </div>
        </div>
    	</nav>
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