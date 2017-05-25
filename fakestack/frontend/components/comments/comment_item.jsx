import React from 'react';
import {FaFlag, FaPencil, FaCamera, FaUserPlus} from 'react-icons/lib/fa/';
import ProfilePictureContainer from '../profile/profile_picture_container';
import {Link} from 'react-router-dom';
import {format1} from '../../utils/date_format';
import CommentFormContainer from '../comments/comment_form_container';

class CommentItem extends React.Component{
  constructor(props){
    super(props);
    this.toggleShowMode = this.toggleShowMode.bind(this);
    this.state = {showMode: false};
  }

  componentWillReceiveNewProps(newProps){
  }

  toggleShowMode (e) {
    e.preventDefault;
    this.setState({showMode: true});
  }

  renderCommentItem(comments){
    return (<ul>
      {comments.map((comment,idx ) => (<CommentItemContainer comment={comment} noReply={true} />))}
    </ul>
  );}


  renderCommentForm(id, parentType){
    return this.state.showMode && !this.props.noReply ? (
      <CommentFormContainer className={"nestedCommentForm"} parent={{parent_id: id, parent_type:parentType}}/>
    ) : "";

  }

  render(){
    let {authorId, createdAt, id, content, replies, comments} = this.props.comment;
    const author = this.props.relevantUsers[authorId];
    const timestamp = format1(createdAt);
    return (
    <div className="CommentItemContainer" key={ id + "commentItemContainer" + this.props.idx }>
      <div className= "commentHeader" >
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
            <label htmlFor="a">
              <a className onClick={this.toggleShowMode}>Reply</a>
            </label>
            <h5 className="timeStamp"> {timestamp} </h5>
          </div>
          <div>
            {this.renderCommentForm(id, "Comment")}
          </div>
        </div>
      </div>
    </div>);
  }

}

export default CommentItem;
