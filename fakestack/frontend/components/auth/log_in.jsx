import React from 'react';

class LogIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: "", password: ""};
    this.inputBackgroundColor = {};
    this.updateValue = this.updateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
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
    this.props.login({user:{email: "Vader@gmail.com", password: "password"}});
  }

  handleEnter(e){
    if (e.charCode === 13) {
      this.handleSubmit();
    }
  }


  render(){

    return (<form id="logoutBar">
      <div className="logo">
        fakestack
      </div>
      <table id="loginForm">
        <tbody>
          <tr>
            <td className="formLabel">
              <label  htmlFor="email"> Email </label>
            </td>
            <td className="formLabel">
              <label  htmlFor="password"> Password</label>
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td>
              <input onKeyPress={this.handleEnter} onChange={this.updateValue("email")} name="email"/>
            </td>
            <td>
              <input onKeyPress={this.handleEnter} type="password" onChange={this.updateValue("password")} name="password"/>
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
    </form>);
  }
}

export default LogIn;
