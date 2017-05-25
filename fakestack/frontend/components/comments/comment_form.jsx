import React from 'react';
import ProfilePictureContainer from '../profile/profile_picture_container';

class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
    this.state = {content: ""};
  }

  handleSubmitComment(e){
    if (e.charCode === 13) {
      e.preventDefault();
      const target = e.currentTarget;
      const {parent_type, parent_id} = this.props.parent;
      const comment = {parent_type, parent_id, content: e.currentTarget.innerHTML};
      this.props.publishComment(comment);
      this.setState({content: ""});
      e.currentTarget.innerHTML = "";
    } else {
    this.setState({content: e.currentTarget.innerHTML});
    }
  }
  render(){
    const className = this.props.className;
    return (
      <form className="commentForm">
        <ProfilePictureContainer imgUrl={this.props.currentUserProfile.profileImgUrl} className="commentIcon"/>
        <div onKeyPress={this.handleSubmitComment}
           contentEditable={true}
          className="comment InputContainer"
          placeholder="Write a comment">
        </div>
      </form>);
  }
}


export default CommentForm;
