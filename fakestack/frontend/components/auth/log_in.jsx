import React from 'react';

class LogIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: "", password: ""};
    this.inputBackgroundColor = {};
    this.updateValue = this.updateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  updateValue(attr){
    return (e)=>{
      e.currentTarget.setAttribute("style", "background-color: white");
      this.setState({[attr]:e.currentTarget.value});
    };
  }

  handleSubmit(e){
    this.props.login({user: this.state });
  }

  handleDemo(e){
    this.props.login({user:{email: "dVader@theEmpire.com", password: "password"}});
  }



  render(){

    return (<div id="logoutBar">
      <div className="logo">
        fakestack
      </div>
      <table id="loginForm">
        <tbody>
          <tr>
            <td>
              <label htmlFor="email"> Email </label>
            </td>
            <td>
              <label htmlFor="password"> Password</label>
            </td>
            <td>

            </td>
          </tr>
          <tr>
            <td>
              <input onChange={this.updateValue("email")} name="email"/>
            </td>
            <td>
              <input onChange={this.updateValue("password")} name="password"/>
            </td>
            <td>
              <label className="loginSubmit" onClick={this.handleSubmit}> Log In</label>
            </td>
            <td>
              <label id="demo" className="loginSubmit" onClick={this.handleDemo}> Demo </label>
            </td>

          </tr>
        </tbody>
      </table>
    </div>);
  }
}

export default LogIn;
