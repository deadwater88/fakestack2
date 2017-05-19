import React from 'react';
import {FaFacebookOfficial, FaGroup, FaCommentsO, FaQuestionCircle, FaGlobe, FaChevronDown} from 'react-icons/lib/fa/';
import NavSearchBar from './nav_search_bar';
import {Link, Redirect, withRouter} from 'react-router-dom';

class HeaderNav extends React.Component {
  constructor(props){
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);

  }

  handleLogOut(e) {
    e.preventDefault;
    this.props.logout();
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
                <img src="http://www.starwarshelmets.com/2007/ANH_HD_vader04.jpg"/>
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
              <FaQuestionCircle className="icon"/>
              <FaChevronDown className="icon"/>
              <ul className="dropDown">
                <a onClick={this.handleLogOut}>Log Out</a>
              </ul>
            </div>
          </div>
        </div>
      </div>);
  }
}


export default HeaderNav;
