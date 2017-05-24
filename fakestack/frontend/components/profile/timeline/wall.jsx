import React from 'react';
import PostFormContainer from '../../posts/post_form_container';


class Wall extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    debugger
    this.props.fetchPosts(this.props.location_id)
  }

  render(){
    return (
    <div className="right Panel">
      <PostFormContainer/>
    </div>);
  }

}

export default Wall;
