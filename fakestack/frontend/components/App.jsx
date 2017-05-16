import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';
import AuthFormContainer from './auth/auth_form_container';
import HeaderContainer from './header_nav/header_container';
const App = () => (
  <div>
    <header>
      <Switch>
        <ProtectedRoute path="/home" component={HeaderContainer} > LoggedIn </ProtectedRoute>
        <AuthRoute path="/" component={AuthFormContainer}></AuthRoute>
      </Switch>
    </header>
  </div>
);

export default App;
