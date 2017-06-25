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
    const { className } = this.props;
    let editable = this.props.currentUserProfile.id === this.props.viewedUserProfile.id;
    let editCheck = editable ? {}: {display: "none"};
    let img;
    if (this.props.imgUrl !== "") {
      img = (<img src={this.props.imgUrl.replace("http:", "https:")} className={className}/>);
    } else {
      img = (<FaUser className={className}/>);
    }
    return (
      <div className={className} onClick={editable ? this.uploadProfilePic : ()=>{}}>
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
