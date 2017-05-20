import React from 'react';
import ProfileHeader from './profile_header';
import HeaderContainer from '../header_nav/header_container';
import ProfileDetailsContainer from './profile_details_container';
import WallContainer from './wall_container';


class Profile extends React.Component{
  constructor(props){
      super(props);
  }

  render(){
    const {uploadProfilePic} = this.props;
    return (
      <div id="profilePage">
        <ProfileHeader uploadProfilePic={uploadProfilePic}/>
         <div id="panelContainer">
           <div className="left Panel">
             <ProfileDetailsContainer/>
           </div>
           <WallContainer >
             RightPanel
           </WallContainer>
        </div>
      </div>
    );

  }

}

export default Profile;
