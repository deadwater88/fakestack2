import React from 'react';
import {FaFlag, FaPencil, FaCamera, FaUserPlus} from 'react-icons/lib/fa/';
import ProfilePictureContainer from '../profile/profile_picture_container';


class PostForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmitPost = this.handleSubmitPost.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {content: "", location_id: this.props.match.params.userId}
  }

  handleSubmitPost(e){
    e.preventDefault;
    this.props.publishPost({post: this.state})
  }

  handleChange(e){
    e.preventDefault;
    this.setState({content: e.currentTarget.value})
  }

  componentWillReceiveNewProps(newProps){
  }

  render(){
    return (
    <form id="PostForm">
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
        <ProfilePictureContainer imgUrl={this.props.currentUserProfile.profileImgUrl} className="profileThumb"/>
        <input onChange={this.handleChange} placeholder="What's on your mind?"/>
      </div>
      <div id="pfButtonContainer">
        <div id="postOptions">
          <FaCamera/>
          <FaUserPlus/>
        </div>
        <button onClick={this.handleSubmitPost} className="submitPost">
          Post
        </button>
      </div>
    </form>);
  }

}

export default PostForm;
