import React from 'react';
import {FaFlag, FaPencil, FaCamera, FaUserPlus, FaClose} from 'react-icons/lib/fa/';
import ProfilePictureContainer from '../profile/profile_picture_container';
import {Link} from 'react-router-dom';
import {format1} from '../../utils/date_format';
import CommentFormContainer from '../comments/comment_form_container';
import CommentItemContainer from '../comments/comment_item_container';

class PostItem extends React.Component{
  constructor(props){
    super(props);
    this.handleDeletePost = this.handleDeletePost.bind(this);
    const{authorId, createdAt, id, content, comments} = this.props.post;
    this.state = {authorId, createdAt, id, content, comments};
  }

  componentWillReceiveProps(newProps){

  }

  handleDeletePost(e){
    this.props.deletePost(this.props.post.id);
  }

  renderComments(postComments, commentStore){
    if (postComments.length > 0 && commentStore[postComments[0]]) {
        return (
          <ul>
          {postComments.map((commentId,idx) => {
            return <li key={"nested" + idx}><CommentItemContainer comment={commentStore[commentId]} idx={idx} /> </li>;
          })}
          </ul>
        );
    }
  }

  render(){
    if (!this.props.post) {
      return <div></div>;
    }
    const{authorId, createdAt, id, content, comments} = this.props.post;
    const author = this.props.author;
    const timestamp = format1(createdAt);
    return (
    <div className="PostItemContainer" key={"postItemContainer" + this.props.idx }>
      <div className="postProper">
        <div className="postHeader" >
          <div className="dropDown post" onClick={this.handleDeletePost}>
            <FaClose/>
          </div>

          <ProfilePictureContainer imgUrl={author.profileImgUrl}
             className="postIcon"/>
         <div className="postMetaData">
           <Link to={`/profile/${authorId}/timeline`}>
             {`${author.firstName} ${author.lastName}`}
           </Link>
           <h5 className="timeStamp"> {timestamp} </h5>
         </div>

        </div>
        <p className="postContent">
          {content}
        </p>
      </div>
      <div className="commentsRest">
        {this.renderComments(comments, this.props.comments)}
        <CommentFormContainer parent={{parent_id: id, parent_type:"Post"}}/>
      </div>
    </div>);
  }

}

export default PostItem;
