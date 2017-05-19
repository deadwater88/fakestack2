import React from 'react';
import {FaFlag, FaPencil, FaCamera, FaUserPlus} from 'react-icons/lib/fa/';

class PostForm extends React.Component{
  constructor(props){
    super(props);
    this.headshot = "https://assets3.thrillist.com/v1/image/1165873/size/tmg-article_default_mobile;jpeg_quality=20.jpg";


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
        <img className="profileThumb" src={this.headshot}/>
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
