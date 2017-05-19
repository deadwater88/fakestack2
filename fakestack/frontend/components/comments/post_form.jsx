import React from 'react';
import {FaFlag, FaPencil, FaCamera, FaUserPlus} from 'react-icons/lib/fa/';
import ProfilePicture from '../profile/profile_picture';
class PostForm extends React.Component{
  constructor(props){
    super(props);

  }


  componentWillReceiveNewProps(newProps){
    console.log("url changed");
  }

  render(){
    return (
    <div id="PostForm">
      <div id="formNav">
        <a>
          <FaPencil/>
          Status
        </a>
        <a>
          <FaCamera/>
          Photo
        </a>
        <a>
          <FaFlag/>
          Life Event
        </a>
      </div>
      <div id="postFormInput">
        <ProfilePicture className="profileThumb"/>
        <input placeholder="What's on your mind?"/>
      </div>
      <div id="pfButtonContainer">
        <div id="postOptions">
          <FaCamera/>
          <FaUserPlus/>
        </div>
        <button className="submitPost">
          Post
        </button>
      </div>
    </div>);
  }

}

export default PostForm;
