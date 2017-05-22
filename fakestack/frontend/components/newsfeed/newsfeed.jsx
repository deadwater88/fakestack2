import React from 'react';
import HeaderContainer from '../header_nav/header_container';


class NewsFeed extends React.Component{
  constructor(props){
    super(props);
  }


  componentWillReceiveNewProps(newProps){
  }

  render(){
    return (
    <div id="newsfeedpage">
      <div id="mainNewsFeed">
        <div>
          SideBar
        </div>
        <div>
          Main Content
        </div>
        <div>
          Right bar
        </div>
      </div>
    </div>);
  }

}

export default NewsFeed;
