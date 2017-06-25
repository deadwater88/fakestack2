import React from 'react';
import {FaGlobe, FaCircle, FaPencil, FaHome, FaTag} from 'react-icons/lib/fa/';
class ProfileDetails extends React.Component {

  constructor(props){
    super(props);
    this.state = { profileId: this.props.match.params.userId,
                   introEditMode: false,
                   introCount: this.props.viewedUserProfile.intro.length,
                   intro: this.props.viewedUserProfile.intro
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
    e.preventDefault();
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
    let editCheck = this.props.viewedUserProfile.id === this.props.currentUserProfile.id ? {} : {display: 'none'};
    let intro = this.props.viewedUserProfile.intro;
    return (
      <label htmlFor="introTextInput">
        <div id="introContainer">
          <h5>{(intro === "") ? "Write something about yourself" : intro }</h5>
          <FaPencil style={editCheck} onClick={this.toggleEditMode} className="editPencil"/>
        </div>
      </label>);
  }

  render(){

    const icons = {hometown: ()=><FaGlobe/>, currentCity: ()=> <FaHome/>, otherName: ()=> <FaTag/> };
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
          {this.props.details.map((detail, idx)=>{
            return (<li key={"pfDetail" + idx} className= "profileDetail">
                {icons[detail[1]]()}
                {detail[0]}
              </li>);
          })}
        </ul>
      </div>
    );
  }
}

export default ProfileDetails;
