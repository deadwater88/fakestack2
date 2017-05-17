import React from 'react';
import LogIn from './log_in';
import SignUp from './sign_up';
import BottomNav from './bottom_nav';

class AuthForm extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const {login, signup} = this.props;
    return (
      <div id="authpage">
        <LogIn id="topcontainer" login={login} />
        <SignUp id="middlecontainer" signup={signup}/>
        <BottomNav id="bottomcontainer" />
      </div>
    );
  }



}

export default AuthForm;
