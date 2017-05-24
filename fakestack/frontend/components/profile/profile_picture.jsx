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
    const {viewedUserProfile, className} = this.props;
    let editCheck = this.props.currentUserProfile.id === this.props.viewedUserProfile.id ? {}: {display: "none"};
    let img;
    if (viewedUserProfile && viewedUserProfile.profileImgUrl !== "") {
      img = (<img src={viewedUserProfile.profileImgUrl}/>);
    } else {
      img = (<FaUser/>);
    }

    return (
      <div className={className}>
        {img}
        {className === 'profileImg' ? (<a onClick={this.uploadProfilePic} className="profilePicLink" style={editCheck}>
          <FaCamera/>
          <p> Update Profile <br/> Picture</p>
        </a>) : ""}
      </div>
    );

  }


}


export default ProfilePicture;
