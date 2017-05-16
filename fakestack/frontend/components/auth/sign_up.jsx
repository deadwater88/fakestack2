import React from 'react';
import {FaNewspaperO, FaUser, FaMusic} from 'react-icons/lib/fa/';


class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: "", firstName: "", lastName: "", password: ""};
    this.updateValue = this.updateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.featureslist = this.featureslist.bind(this);
  }

  updateValue(attr){
    return (e)=>{
      this.setState({[attr]:e.currentTarget.value}, ()=>console.log(this.state));
    };
  }

  handleSubmit(e){
    this.props.signup({user: this.state });
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

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  render(){

    return (
    <div id="welcome">
      {this.featureslist()}
      <form id="signup">
        <h2>Welcome!</h2>
        <h3>It's free... for now...</h3>
        <div>
          <input onChange={this.updateValue("firstName")} type="text" placeholder={"First Name"} value= {this.state.firstName}/>
          <input onChange={this.updateValue("lastName")} type="text" placeholder={"Last Name"} value= {this.state.lastName}/>
        </div>
        <div>
          <input onChange={this.updateValue("email")} type="text" placeholder={"Email"} value= {this.state.email}/>
        </div>
        <div>
          <input onChange={this.updateValue("password")} type="text" placeholder={"New Password"} value= {this.state.password}/>
        </div>
            <button onClick={this.handleSubmit}> Create Account </button>
          </form>
    </div>);
  }
}

export default SignUp;
