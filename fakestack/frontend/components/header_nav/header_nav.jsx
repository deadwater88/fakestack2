import React from 'react';
import {FaFacebookSquare, FaUsers, CommentsO} from 'react-icons/lib/fa/';
import NavSearchBar from './nav_search_bar';

class HeaderNav extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout();
  }




  render(){
    return (
      <div id="headerNav">
        <FaFacebookSquare/>
        <NavSearchBar/>
        <div>
          <div>
            <a>
              <div>Profile Image</div>
              <div>Name</div>
            </a>
            <div>
              Home
            </div>
          </div>
          <FaUsers>
            <Friend Requests/>
          </FaUsers>
          <CommentsO>
          </CommentsO>
        </div>

        <button onClick={this.handleClick}>Log Out</button>
      </div>);
  }
}


export default HeaderNav;
