import React from 'react';
import {FaUser} from 'react-icons/lib/fa/';


const ProfileIcon = (props) => {
  const imgUrl = props.imgUrl || ""  ;
  return imgUrl !== "" ? (
    <img className="profileIcon" src={imgUrl.replace("http", "https")} />
  ) :
  (
    <FaUser className="profileIcon" />
  );
};

export default ProfileIcon;
