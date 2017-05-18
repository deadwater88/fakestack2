import React from 'react';
import ProfileHeader from './profile_header';
import HeaderContainer from '../header_nav/header_container';

class Profile extends React.Component{
  constructor(props){
      super(props);
  }

  render(){

    return (
      <div id="profilePage">
        <ProfileHeader/>
         <div id="panelContainer">
           <div id="leftPanel">
             LeftPanel
           </div>
           <div id="rightPanel">
             RightPanel
           </div>
        </div>
      </div>
    );

  }

}

export default Profile;
