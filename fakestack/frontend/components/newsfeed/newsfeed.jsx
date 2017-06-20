import React from 'react';
import HeaderContainer from '../header_nav/header_container';
import WestBar from './westbar';
import EastBar from './eastbar';
import PostFormContainer from '../posts/post_form_container';
import PostItemContainer from '../posts/post_item_container';

class NewsFeed extends React.Component{
  constructor(props){
    super(props);
  }


  componentWillMount(){
    this.props.fetchPosts(this.props.currentUserProfile.id);
    this.props.fetchRelevantUsers();
  }

  render(){
    let {posts} = this.props;
    return (
    <div id="newsfeedpage">
      <div id="mainNewsFeed">
        <WestBar/>
        <div id="feedContainer">
          <PostFormContainer/>
          {posts.map((post,idx)=> {
            return <PostItemContainer key={idx + "PIC"}  post={post} idx={idx}/>;
          })}
        </div>
        <EastBar/>
      </div>
    </div>);
  }

}

export default NewsFeed;
