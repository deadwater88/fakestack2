import React from 'react';
import LogIn from './log_in';
import SignUp from './sign_up';
import BottomNav from './bottom_nav';

class AuthForm extends React.Component{
  constructor(props){
    super(props);
    this.sessionErrors = this.sessionErrors.bind(this);
  }

  componentDidMount(){
    this.props.fetchRelevantUsers(13);
    this.props.fetchCurrentUser(13);
    this.props.fetchViewedProfile(13);
  }

  sessionErrors(){
    const {sessionErrors} = this.props;
    return sessionErrors.length === 0 ? "" :
     (<ol className="alert frontpage">
      {sessionErrors.map((err,idx)=> (
        <li key={idx + "err"}>
          {err}
        </li>
      ))}
    </ol>);
  }



  render(){
    const {login, signup} = this.props;
    return (
      <div id="authpage">
        <LogIn id="topcontainer" login={login} />
        <SignUp id="middlecontainer" signup={signup}/>
        <BottomNav id="bottomcontainer" />
        {this.sessionErrors()}
      </div>
    );
  }



}

export default AuthForm;
