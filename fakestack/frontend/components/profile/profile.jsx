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

  componentWillReceiveProps(newprops){
    console.log(newprops);
  }

  render(){
    const {uploadPic, currentUserProfile} = this.props;
    return (
      <div id="profilePage">
        <ProfileHeader uploadPic={uploadPic} currentUserProfile={currentUserProfile}/>
        <Route path="/profile/timeline" component={Timeline}></Route>
        <Route path="/profile/edit" component={EditProfileContainer}></Route>
      </div>
    );
  }
}

export default Profile;
