import React from 'react';
import ProfileHeader from './profile_header';

class Profile extends React.Component{
  constructor(props){
      super(props);
  }

  render(){

    return (
      <div id="profilePage">
        <ProfileHeader/>
      </div>
    );

  }

}

export default Profile;
