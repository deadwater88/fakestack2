import React from 'react';
import {FaFlag, FaPencil, FaCamera, FaUserPlus} from 'react-icons/lib/fa/';
import ProfilePictureContainer from '../profile/profile_picture_container';
import {Link} from 'react-router-dom'

class PostItem extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillReceiveNewProps(newProps){
  }

  render(){
    const{authorId, createdAt, id, content} = this.props.post;
    const author = this.props.relevantUsers[authorId];
    return (
    <div className="PostItemContainer" key={"postItemContainer" + this.props.idx }>
      <div className= "postHeader" >
        <ProfilePictureContainer imgUrl={author.profileImgUrl}
           className="profileThumb"/>
         <div>
           <Link to={`/profile/${authorId}/timeline`}>
             {`${author.firstName} ${author.lastName}`}
           </Link>
           <h5> {createdAt} </h5>
         </div>
      </div>
      <p className="postContent">
        {content}
      </p>
    </div>);
  }

}

export default PostItem;
