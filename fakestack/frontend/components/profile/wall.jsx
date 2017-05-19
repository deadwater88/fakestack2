import React from 'react';
import PostFormContainer from '../comments/post_form_container';


class Wall extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {comments} = this.props.comments;
    return (
    <div className="right Panel">
      <PostFormContainer/>
    </div>);
  }

}

export default Wall;
