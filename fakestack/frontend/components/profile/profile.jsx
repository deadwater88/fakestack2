import React from 'react';
import ProfileHeaderContainer from './profile_header_container';
import HeaderContainer from '../header_nav/header_container';
import {Route} from 'react-router-dom';
import Timeline from './timeline/timeline';
import AboutProfileContainer from './aboutprofile/about_profile_container';
import FriendsContainer from './friends/friends_container';


class Profile extends React.Component{
  constructor(props){
      super(props);
  }

  componentWillReceiveProps(newProps){
    const newId = newProps.match.params.userId;
    if (newId && parseInt(newId) !== this.props.viewedUserProfile.id) {
      this.props.fetchViewedProfile(newProps.match.params.userId);
    }
  }

  componentWillMount(){
    const {viewedUserProfile} = this.props;
    debugger
    if ( viewedUserProfile.id !== parseInt(this.props.match.params.userId)) {
      this.props.fetchViewedProfile(this.props.match.params.userId);
    }
  }

  render(){
    const {uploadPic, viewedUserProfile, currentUserProfile, match} = this.props;
    return viewedUserProfile.id === undefined ? <div></div> : (
      <div id="profilePage">
        <ProfileHeaderContainer match={match}/>
        <Route path="/profile/:userId/timeline" component={Timeline}></Route>
        <Route path="/profile/:userId/about" component={AboutProfileContainer}></Route>
        <Route path="/profile/:userId/friends" component={FriendsContainer}></Route>
      </div>
    );
  }
}

export default Profile;
