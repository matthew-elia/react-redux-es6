import React from 'react';  
import { Route, IndexRoute } from 'react-router';  
import App from './components/App';  
import HomePage from './components/home/HomePage';
import UsersPage from './components/user/UsersPage';   
import LoginPage from './components/common/LoginPage';
import auth from './auth/authentic';

export default (  
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/users" component={UsersPage}/>
  </Route>
);

function requireAuth(nextState, replace) {

  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}