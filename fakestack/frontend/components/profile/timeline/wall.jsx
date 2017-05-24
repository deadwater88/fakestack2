import React from 'react';
import PostFormContainer from '../../posts/post_form_container';
import PostItemContainer from '../../posts/post_item_container';

class Wall extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchPosts(this.props.location_id)
  }

  render(){
    const {posts} = this.props
    return (
    <div className="right Panel">
      <PostFormContainer/>
      {posts.map((post,idx)=> {
        return <PostItemContainer key={idx + "PIC"}  post={post} idx={idx}/>
      })}
    </div>);
  }

}

export default Wall;
