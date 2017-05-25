import React from 'react';
import {FaUser} from 'react-icons/lib/fa/';


const ProfileIcon = (props) => {
  const {imgUrl} = props;
  return imgUrl !== "" ? (
    <img className="profileIcon" src={imgUrl} />
  ) :
  (
    <FaUser className="profileIcon" />
  );
};

export default ProfileIcon;
