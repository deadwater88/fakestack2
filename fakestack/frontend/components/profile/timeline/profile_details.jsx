import React from 'react';
import {FaGlobe, FaCircle, FaPencil} from 'react-icons/lib/fa/';
class ProfileDetails extends React.Component {

  constructor(props){
    super(props);
    this.state = { profileId: this.props.match.params.userId,
                   introEditMode: false,
                   introCount: props.viewedUserProfile.intro.length,
                   intro: props.viewedUserProfile.intro
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    const {viewedUserProfile} = this.props;
    if ( !viewedUserProfile || viewedUserProfile.id !== parseInt(this.props.match.params.userId)) {
      this.props.fetchViewedProfile(this.props.match.params.userId);
    }
  }

  handleChange(e){
    e.preventDefault();
    this.setState({intro: e.currentTarget.value, introCount: e.currentTarget.value.length});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateProp({intro: this.state.intro}, this.props.currentUserProfile.id);
    this.toggleEditMode();
  }

  toggleEditMode(e){
    this.setState({introEditMode: !this.state.introEditMode});
  }

  editProp(){
    return (<div id="introForm">
      <textarea id="introTextInput" onChange={this.handleChange}
         placeholder="Describe who you are"
         autoFocus
          value={this.state.intro}></textarea>
      <div id="introFormButtonContainer">
        <div id="introCount"> {101 - this.state.introCount} </div>
        <div className="formButtons">
          <button onClick={this.toggleEditMode}
             className="cancelForm"> Cancel </button>
          <button onClick={this.handleSubmit}
             className="submitForm"> Save </button>
        </div>
      </div>
    </div>);

  }

  showProp(){
    return (
      <label htmlFor="introTextInput">
        <div id="introContainer">
          <h5>{this.state.intro}</h5>
          <FaPencil onClick={this.toggleEditMode} className="editPencil"/>
        </div>
      </label>);
  }

  render(){
    return(
      <div id="profile">
        <section className="intro">
          <h1 className="intro">
            <div id="circleIcon">
              <FaCircle id="circle">
              </FaCircle>
              <FaGlobe id="globe"/>
            </div>
            Intro
          </h1>
          {this.state.introEditMode ? this.editProp() : this.showProp()}
        </section>
        <ul id="profileDetails">
          <li className= "profileDetail"> <FaGlobe/> Test Profile Detail</li>
        </ul>
      </div>
    );
  }
}

export default ProfileDetails;
