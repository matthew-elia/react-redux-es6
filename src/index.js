// import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadUsers} from './actions/userActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

store.dispatch(loadUsers());
store.subscribe(()=>{
  console.log('new client state', store.getState());
});
store.dispatch({type:'server/whatsup', data:'websocket peristence is up.'});

render(
	<Provider store={store}> 
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);