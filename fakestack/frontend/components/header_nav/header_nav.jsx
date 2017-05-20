import React from 'react';
import {FaFacebookOfficial, FaGroup, FaCommentsO, FaQuestionCircle, FaGlobe, FaChevronDown} from 'react-icons/lib/fa/';
import NavSearchBar from './nav_search_bar';
import {Link, Redirect, withRouter} from 'react-router-dom';
import ProfilePicture from '../profile/profile_picture_container';

class HeaderNav extends React.Component {
  constructor(props){
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault;
    this.props.logout();
  }

  showDropdown(e) {
    e.preventDefault;
    document.getElementsByClassName("dropDown-content")[0].classList.toggle("show");
  }

  render(){
    const {firstName, lastName} = this.props.currentUser;
    return (
      <div id="headerMaster">
        <div id="headerNavContent"></div>
        <div id="headerNav">
          <div id="searchContainer">
            <FaFacebookOfficial className="white"/>
            <NavSearchBar/>
          </div>
            <div id="headerNavMenu">
            <div id="menu1">
              <Link to='/profile' id={"profilelink"}>
                <ProfilePicture className="profileIcon"/>
                <h3 className="firstName">{firstName}</h3>
              </Link>
                <Link to='/home'>Home</Link>
            </div>
            <div id="menu2">
              <FaGroup className="icon"/>
              <FaCommentsO className="icon"/>
              <FaGlobe className="icon"/>
            </div>
            <div id="menu3">
              <FaQuestionCircle  className="icon"/>
              <div className="dropDown">
                <FaChevronDown onClick={this.showDropdown} className="icon"/>
                <ul className="dropDown-content">
                  <a onClick={this.handleLogOut}>Log Out</a>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>);
  }
}


export default HeaderNav;
