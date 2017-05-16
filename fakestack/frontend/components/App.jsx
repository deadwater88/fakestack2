import React from 'react';
import { Route } from 'react-router-dom';
import {AuthRoute} from '../utils/route_util';
import AuthFormContainer from './auth/auth_form_container'

const App = () => (
  <div>
    <header>
      <AuthFormContainer/>
    </header>
  </div>
);

export default App;
