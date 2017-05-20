import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';
import AuthFormContainer from './auth/auth_form_container';
import HeaderContainer from './header_nav/header_container';
import NewsFeed from './newsfeed/newsfeed';
import ProfileContainer from './profile/profile_container';


const App = () => (
  <div id="AppElement">
    <header>
      <ProtectedRoute path="/" component={HeaderContainer} > LoggedIn </ProtectedRoute>
    </header>
    <Switch>
      <ProtectedRoute path="/home" component={NewsFeed} > LoggedIn </ProtectedRoute>
      <ProtectedRoute path="/profile" component={ProfileContainer} >  </ProtectedRoute>
      <AuthRoute path="/" component={AuthFormContainer}></AuthRoute>
    </Switch>
  </div>
);



export default App;
