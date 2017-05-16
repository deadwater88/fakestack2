import React from 'react';
import LogIn from './log_in';
import SignUp from './sign_up';
class AuthForm extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const {login, signup} = this.props;
    return (
      <div>
        <LogIn login={login} />
        <SignUp signup={signup}/>
      </div>
    );
  }



}

export default AuthForm;
