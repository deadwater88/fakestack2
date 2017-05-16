import React from 'react';
import LogIn from './log_in';

class AuthForm extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {login, signup} = this.props
    return (
      <div>
        <LogIn login={login} />
      </div>
    )
  }



}

export default AuthForm
