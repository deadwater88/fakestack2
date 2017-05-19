import React from "react";
import {FaUser} from 'react-icons/lib/fa/';

const ProfilePicture = (props) => {
  const {currentUserProfile, className} = props;
  let img;
  if (currentUserProfile && currentUserProfile.profile_image_url !== "") {
    img = (<img src={currentUserProfile.profile_image_url}/>);
  } else {
    img = (<FaUser/>);
  }

  return (
    <div className={className}>
      {img}
    </div>
  );
};

export default ProfilePicture;
