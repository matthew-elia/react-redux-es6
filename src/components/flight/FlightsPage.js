import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as flightActions from '../../actions/flightActions';

class FlightsPage extends React.Component {
  constructor(props,context) {
    super(props,context);
    // this.state = {credentials: {email: '', password: ''}}
    // this.onChange = this.onChange.bind(this);
    // this.onSave = this.onSave.bind(this);
  }

  // onChange(event) {
  //   const field = event.target.name;
  //   const credentials = this.state.credentials;
  //   credentials[field] = event.target.value;
  //   return this.setState({credentials: credentials});
  // }

  // onSave(event) {
  //  	event.preventDefault();
  //   this.props.actions.loginUser(this.state.credentials);
  // }

  tripRow(trip, index) {
    return <li key={index} className="userRowContent"> {trip[index].saleTotal.toString()} </li>; 
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>
              <big className="pull-right">.:FLY</big>
            </h1>
            <div className="clearfix"></div> 
            <hr/>
          </div>
          <div className="col-xs-12">
            <ul className="list-unstyled">{this.props.flights.map(this.tripRow)}</ul>
          </div>
        </div>
      </div>
    );
  }

}

FlightsPage.propTypes = {
  flights: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    flights: state.flight
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(flightActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(FlightsPage);