import React from 'react';
import {FaFacebookSquare, FaGroup, FaCommentsO} from 'react-icons/lib/fa/';
import NavSearchBar from './nav_search_bar';

class HeaderNav extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault;
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
          <FaGroup/>
        </div>

        <button onClick={this.handleClick}>Log Out</button>
      </div>);
  }
}


export default HeaderNav;
