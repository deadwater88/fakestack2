import React from 'react';
import {FaFlag, FaPencil, FaCamera, FaUserPlus} from 'react-icons/lib/fa/';
import ProfilePictureContainer from '../profile/profile_picture_container';


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
    console.log(content);
    content = content.replace(/<\/div>|&nbsp/g, "").replace(/<br>|<div>/g, "\n");
    console.log(content);
    this.props.publishPost({post: {content, location_id: this.props.match.params.userId} });
    this.setState({content:""});
    document.getElementsByClassName("post InputContainer")[0].innerHTML = "";
  }

  handleChange(e){
    this.setState({content: e.currentTarget.innerHTML});

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
        <ProfilePictureContainer imgUrl={this.props.currentUserProfile.profileImgUrl} className=""/>
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
