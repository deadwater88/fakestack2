import React from 'react';
import {FaFacebookOfficial, FaGroup, FaCommentsO, FaQuestionCircle, FaGlobe, FaChevronDown} from 'react-icons/lib/fa/';
import NavSearchBar from './nav_search_bar';
import {Link, Redirect, withRouter} from 'react-router-dom';
import ProfileIcon from '../profile/profile_icon';
import FriendsRequestsContainer from '../profile/friends/friend_requests_container';

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

  componentWillMount(){
    this.props.fetchCurrentUser(this.props.currentUser.id);
    this.props.fetchRelevantUsers(this.props.currentUser.id);
  }

  showDropdown(e) {
    e.preventDefault;
    document.getElementsByClassName("dropDown-content logOut")[0].classList.toggle("show");
  }

  showRequests(e){
    e.preventDefault;
    document.getElementsByClassName("dropDown-content requests")[0].classList.toggle("show")
  }

  renderFriendsRequests(e){
    if (Object.keys(this.props.relevantUsers).length === 0) {
      return "";
    }
    return (<FriendsRequestsContainer />);
  }

  render(){
    const {firstName, lastName} = this.props.currentUser;
    return (
      <div id="headerMaster">
        <div id="headerNavContent"></div>
        <div id="headerNav">
          <div id="searchContainer">
            <Link to='/home'> <FaFacebookOfficial className="white"/>
            </Link>
            <NavSearchBar relevantUsers={this.props.arrayRelevantUsers}/>
          </div>
            <div id="headerNavMenu">
            <div id="menu1">
              <Link to={`/profile/${this.props.currentUser.id}/timeline`} id={"profilelink"}>
                <ProfileIcon imgUrl={this.props.currentUserProfile.profileImgUrl} className="profileIcon"/>
                <h3 className="firstName">{firstName}</h3>
              </Link>
                <Link to='/home'>Home</Link>
            </div>
            <div id="menu2">
              <div id="friendRequestsDrop" >
                <div title={"Friend Requests"} onClick={this.showRequests}> <FaGroup className="icon" /></div>
                {this.renderFriendsRequests()}
              </div>
              <FaCommentsO className="icon"/>
              <FaGlobe className="icon"/>
            </div>
            <div id="menu3">
              <FaQuestionCircle  className="icon"/>
              <div className="dropDown">
                <FaChevronDown onClick={this.showDropdown} className="icon"/>
                <ul className="dropDown-content logOut">
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
