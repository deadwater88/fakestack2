import React from "react";
import {FaUser, FaCamera} from 'react-icons/lib/fa/';


class ProfilePicture extends React.Component {
  constructor(props){
    super(props);
    this.uploadProfilePic = this.uploadProfilePic.bind(this);
  }


  uploadProfilePic(e){
    const upLoadProfilePic = this.props.uploadProfilePic;
    const userId = this.props.currentUserProfile.id;
    window.cloudinary.openUploadWidget(window.cloudinary_options,
    (error, images)=>{
      if (error === null) {
        upLoadProfilePic({profile_img_url: images[0].url}, userId);
      } else {
      }
    });
  }

  render () {
    const {currentUserProfile, className} = this.props;
    let img;
    if (currentUserProfile && currentUserProfile.profileImgUrl !== "") {
      img = (<img src={currentUserProfile.profileImgUrl}/>);
    } else {
      img = (<FaUser/>);
    }

    return (
      <div className={className}>
        {img}
        {className === 'profileImg' ? (<a onClick={this.uploadProfilePic} className="profilePicLink">
          <FaCamera/>
          <p> Update Profile <br/> Picture</p>
        </a>) : ""}
      </div>
    );

  }


}


export default ProfilePicture;
