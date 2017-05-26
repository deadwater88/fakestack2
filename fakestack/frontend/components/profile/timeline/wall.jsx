import React from 'react';
import PostFormContainer from '../../posts/post_form_container';
import PostItemContainer from '../../posts/post_item_container';

class Wall extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchPosts(this.props.location_id);
  }

  render(){
    let {posts} = this.props;
    posts = posts.sort((post1,post2)=> new Date(post2.createdAt) - new Date(post1.createdAt));
    return (
    <div id="wallContainer" className="right Panel">
      <PostFormContainer/>
      {posts.map((post,idx)=> {
        return <PostItemContainer key={idx + "PIC"}  post={post} idx={idx}/>;
      })}
    </div>);
  }

}

export default Wall;
