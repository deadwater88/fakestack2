import React from 'react';
import {FaFlag, FaPencil, FaCamera, FaUserPlus} from 'react-icons/lib/fa/';
import ProfilePictureContainer from '../profile/profile_picture_container';
import {Link} from 'react-router-dom';
import {format1} from '../../utils/date_format';
import CommentFormContainer from '../comments/comment_form_container';

class PostItem extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillReceiveNewProps(newProps){
  }

  render(){
    const{authorId, createdAt, id, content} = this.props.post;
    const author = this.props.relevantUsers[authorId];
    const timestamp = format1(createdAt);
    return (
    <div className="PostItemContainer" key={"postItemContainer" + this.props.idx }>
      <div className= "postHeader" >
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
      <div className="commentsRest">
        <div>
          Comments
        </div>
        <CommentFormContainer parent={{parent_id: id, parent_type:"Post"}}/>
      </div>
    </div>);
  }

}

export default PostItem;
