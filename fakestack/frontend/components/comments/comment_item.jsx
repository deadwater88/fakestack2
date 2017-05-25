import React from 'react';
import {FaFlag, FaPencil, FaCamera, FaUserPlus, FaClose} from 'react-icons/lib/fa/';
import ProfilePictureContainer from '../profile/profile_picture_container';
import {Link} from 'react-router-dom';
import {format1} from '../../utils/date_format';
import CommentFormContainer from './comment_form_container';
import CommentItemContainer from './comment_item_container';
import values from 'lodash/values';

class CommentItem extends React.Component{
  constructor(props){
    super(props);
    this.toggleShowMode = this.toggleShowMode.bind(this);
    let {authorId, createdAt, id, content, replies, comments} = this.props.comment;
    this.state = {showMode: false, authorId, createdAt, id, content, replies, comments};
    this.handleDeleteComment = this.handleDeleteComment.bind(this);

  }

  componentWillReceiveNewProps(newProps){
  }

  toggleShowMode (e) {
    let formEl = this.props.formId ?
    document.getElementById(this.props.formId) :
    document.getElementById('replyForm' + this.state.id);
    formEl.setAttribute("style", " display:flex");
    let formInput = this.props.formId ?
    document.getElementById(this.props.formId + "Input") :
    document.getElementById('replyForm' + this.state.id + "Input");
    formInput.focus();
    this.setState({showMode: true});
  }

  handleDeleteComment(e){
    this.props.deleteComment(this.props.comment.id);
  }

  renderCommentItem(replies){
    return (
    <ul>
      {replies.map((reply, idx ) => (
        <li key ={idx + "reply"}>
          <CommentItemContainer comment={reply} formId={"replyForm" + this.state.id} noReply={true} />
        </li>))}
    </ul>
  );}


  renderCommentForm(id, parentType){
    return !this.props.noReply ? (
      <CommentFormContainer id={"replyForm" + id} className parent={{parent_id: id, parent_type:parentType}}/>
    ) : "";

  }

  render(){
    let {authorId, createdAt, id, content, replies, comments} = this.props.comment;
    const author = this.props.relevantUsers[authorId];
    const timestamp = format1(createdAt);
    return (
    <div className="CommentItemContainer" key={ id + "commentItemContainer" + this.props.idx }>
      <div className= "commentHeader" >
        <div className="dropDown post" onClick={this.handleDeleteComment}>
          <FaClose/>
        </div>
        <ProfilePictureContainer imgUrl={author.profileImgUrl}
           className="commentIcon"/>
        <div className="commentData">
          <div className= "commentMetaContent">
             <p className="commentContent">
               <Link to={`/profile/${authorId}/timeline`}>
                 {`${author.firstName} ${author.lastName}`}
               </Link>
               {content}
             </p>
          </div>
          <div className="commentLinks">
            <a>Like</a>
            <label htmlFor={ this.props.formId + "Input" ||"replyForm" + id +"Input"}>
              <a className onClick={this.toggleShowMode}>Reply</a>
            </label>
            <h5 className="timeStamp"> {timestamp} </h5>
          </div>
          { replies ?  this.renderCommentItem(replies) : ""}
          <div>
            {this.renderCommentForm(id, "Comment")}
          </div>
        </div>
      </div>
    </div>);
  }

}

export default CommentItem;
