import React from 'react';
import {FaFlag, FaPencil, FaCamera, FaUserPlus} from 'react-icons/lib/fa/';
import ProfileIcon from '../profile/profile_icon';


class PostForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmitPost = this.handleSubmitPost.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {content: ""};
  }

  handleSubmitPost(e){
    e.preventDefault();
    let {content} = this.state;
    content = content.replace(/<\/div>|&nbsp/g, "").replace(/<br>|<div>/g, "\n");
    this.props.publishPost({post: {content, location_id: this.props.match.params.userId|| this.props.currentUserProfile.id} });
    this.setState({content:""});
    document.getElementsByClassName("post InputContainer")[0].innerHTML = "";
  }

  handleChange(e){
    this.setState({content: e.currentTarget.innerHTML});

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
      </div>
      <div id="postFormInput">
        <ProfileIcon imgUrl={this.props.currentUserProfile.profileImgUrl} className="commentFormIcon"/>
          <div contentEditable={true}
            className="post InputContainer"
            placeholder="What's on your mind?"
            onKeyUp={this.handleChange}>

          </div>
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
