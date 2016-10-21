import React from 'react';  
import { Route, IndexRoute } from 'react-router';  
import App from './components/App';  
import HomePage from './components/home/HomePage';
import UsersPage from './components/user/UsersPage';  
// import UserPage from './components/user/UserPage';  
// import NewUserPage from './components/user/NewUserPage';  
import LoginPage from './components/common/LoginPage';

export default (  
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/users" component={UsersPage} />
  </Route>
);
