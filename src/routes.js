import React from 'react';  
import { Route, IndexRoute } from 'react-router';  
import App from './components/App';  
import HomePage from './components/home/HomePage';
import UsersPage from './components/user/UsersPage';   
import LoginPage from './components/common/LoginPage';
import auth from './auth/authentic';

export default (  
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage}></IndexRoute>
    <Route path="/home" component={HomePage} onEnter={requireAuth}/>
    <Route path="/users" component={UsersPage} onEnter={requireAuth}/>
  </Route>
);

function requireAuth(nextState, replace) {

  if (!auth.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}