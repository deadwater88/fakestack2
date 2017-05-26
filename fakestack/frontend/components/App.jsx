import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';
import AuthFormContainer from './auth/auth_form_container';
import HeaderContainer from './header_nav/header_container';
import NewsFeed from './newsfeed/newsfeed';
import ProfileContainer from './profile/profile_container';
import FriendRequestsContainer from './profile/friends/friend_requests_container';


const App = (props) =>  {
  return (
  <div id="AppElement">
    <header>
      <ProtectedRoute path="/" component={HeaderContainer} > LoggedIn </ProtectedRoute>
    </header>
    <Switch>
      <ProtectedRoute path={`/profile/:userId`} component={ProfileContainer} >  </ProtectedRoute>
      <ProtectedRoute path="/home" component={NewsFeed} > LoggedIn </ProtectedRoute>
      <ProtectedRoute path="/friends/requests" component={FriendRequestsContainer} > LoggedIn </ProtectedRoute>
      <AuthRoute path="/" component={AuthFormContainer}></AuthRoute>
    </Switch>
  </div>
);

};



export default App;
