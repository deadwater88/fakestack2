import React from 'react';
import {FaNewspaperO, FaUser, FaMusic} from 'react-icons/lib/fa/';


class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: "", first_name: "", last_name: "", password: "", email2:""};
    this.updateValue = this.updateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.featureslist = this.featureslist.bind(this);
    this.email2 = "";
    this.showsecondemail = false;
    this.secondEmailcomponent = this.secondEmailcomponent.bind(this);
  }

  updateValue(attr){
    return (e)=>{
      this.setState({[attr]:e.currentTarget.value}, this.revealEmail2);
    };
  }

  revealEmail2(){
    let re = /@.+\./;
    if (this.state.email.match(re)) {
      this.showsecondemail = true;
    }
  }

  handleSubmit(e){
    const {email, first_name, last_name, password} = this.state;
    this.props.signup({email, first_name, last_name, password});
  }

  featureslist(){
    let images = [FaNewspaperO,
                  FaUser,
                  FaMusic];
    let title = ["See photos and comments",
                  "Find friends",
                  "Find your interests"];
    let sub = ["from friends in News Feed.",
                  "through friends.",
                  "with fakebook Search."];
    return (<div id="features">
      <h2>Do this and That or Not. Im Not Your Father</h2>
      {images.map((Imagel, index)=>
        (<div key={index +"img"} className="feature">
          <Imagel className="icon"/>
          <span className="title" >{title[index]}</span>
          <span className= "sub">{sub[index]}</span>
        </div>))
      }
    </div>);
  }


  secondEmailcomponent() {
    const email2 = (<div>
      <input onChange={this.updateValue("email2")} type="text" placeholder={"Re-enter email"} value= {this.state.email2}/>
    </div>);
    return this.showsecondemail ? email2 : "";
  }

  render(){

    return (
    <div id="welcome">
      {this.featureslist()}
      <form id="signup">
        <h2>Welcome!</h2>
        <h3>It's free... for now...</h3>
        <div>
          <input onChange={this.updateValue("first_name")} type="text" placeholder={"First Name"} value= {this.state.firstName}/>
          <input onChange={this.updateValue("last_name")} type="text" placeholder={"Last Name"} value= {this.state.lastName}/>
        </div>
        <div>
          <input onChange={this.updateValue("email")} type="text" placeholder={"Email"} value= {this.state.email}/>
        </div>
        {this.secondEmailcomponent()}
        <div>
          <input onChange={this.updateValue("password")} type="text" placeholder={"New Password"} value= {this.state.password}/>
        </div>
            <button onClick={this.handleSubmit}> Create Account </button>
        </form>
    </div>);
  }
}

export default SignUp;
