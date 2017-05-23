import React from 'react';
import HeaderContainer from '../header_nav/header_container';
import WestBar from './westbar';
import EastBar from './eastbar';

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
        <WestBar/>
        <div>
          Main Content
        </div>
        <EastBar/>
      </div>
    </div>);
  }

}

export default NewsFeed;
