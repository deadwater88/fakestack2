import React from 'react';
import ProfileHeader from './profile_header';
import HeaderContainer from '../header_nav/header_container';
import {Route} from 'react-router-dom';
import Timeline from './timeline/timeline';
import EditProfileContainer from './editprofile/edit_profile_container';


class Profile extends React.Component{
  constructor(props){
      super(props);
  }

  componentWillMount(){
    const {viewedUserProfile} = this.props;
    if ( !viewedUserProfile || viewedUserProfile.id !== parseInt(this.props.match.params.userId)) {
      this.props.fetchViewedProfile(this.props.match.params.userId);
    }
  }

  render(){
    const {uploadPic, currentUserProfile} = this.props;
    return (
      <div id="profilePage">
        <ProfileHeader uploadPic={uploadPic} currentUserProfile={currentUserProfile}/>
        <Route path="/profile/:userId/timeline" component={Timeline}></Route>
        <Route path="/profile/:userId/about" component={EditProfileContainer}></Route>
      </div>
    );
  }
}

export default Profile;
