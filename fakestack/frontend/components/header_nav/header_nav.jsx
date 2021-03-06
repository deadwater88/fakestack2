import React from 'react';
import {FaFacebookOfficial, FaGroup, FaCommentsO, FaQuestionCircle, FaGlobe, FaChevronDown} from 'react-icons/lib/fa/';
import NavSearchBar from './nav_search_bar';
import {Link, Redirect, withRouter} from 'react-router-dom';
import ProfileIcon from '../profile/profile_icon';
import FriendsRequestsContainer from '../profile/friends/friend_requests_container';
import MessagingDropdownContainer from '../messaging/messaging_dropdown_container';
import dropDownConnect from '../../utils/dropdown_connect';
import ReactDOM from 'react-dom';

class HeaderNav extends React.Component {
  constructor(props){
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.showRequests = this.showRequests.bind(this);
    this.hideRequests = this.hideRequests.bind(this);
    this.state = {showRequests: false};
    let messageSwitch = () =>
      (<div title={"Message a Friend"}><FaCommentsO className="icon"/>
    </div>);
    this.MessageDropDown = dropDownConnect(messageSwitch, MessagingDropdownContainer);
  }

  handleLogOut(e) {
    e.preventDefault;
    this.props.logout();
  }

  componentWillMount(){
    this.props.fetchCurrentUser(this.props.currentUser.id);
    // this.props.fetchRelevantUsers(this.props.currentUser.id);
  }

  componentDidMount () {
    window.__root_container.addEventListener('click', this.hideRequests);
  }

  componentWillUnmount () {
    window.__root_container.removeEventListener('click', this.hideRequests);
  }



  addClickOut(className){
    const listener = (e) => {
       let targetClass = e.target.classList.value;
        if (targetClass.match("request")) {
          e.stopPropagation();
          return "";
        }
        let target = document.getElementsByClassName(className)[0];
        if (target) {
          target.classList.remove("show");
          document.removeEventListener("click", listener);
        }
    };
    return listener;
  }

  showDropdown(e) {
    e.preventDefault();
    document.getElementsByClassName("dropDown-content logOut")[0].classList.toggle("show");
    document.addEventListener("click", this.addClickOut("dropDown-content logOut"));
  }

  showRequests(e){
    e.preventDefault();
    this.setState({showRequests: !this.state.showRequests});
  }

  hideRequests(evt){
    const friends_requests = ReactDOM.findDOMNode(this.refs.friends_requests);
    if (friends_requests && !friends_requests.contains(evt.target) && !this.refs.friendRequestsDrop.contains(evt.target)) {
      this.setState({showRequests: false});
    }
  }

  renderFriendsRequests(){
    if (!this.props.currentUserProfile) {
      return "";
    }
    return ( <div ref="friends_requests">
      <FriendsRequestsContainer/>
    </div> );
  }

  render(){
    const {firstName} = this.props.currentUser;

    return (
      <div id="headerMaster">
        <div id="headerNavContent"></div>
        <div id="headerNav">
          <div id="searchContainer">
            <a href='/'> <FaFacebookOfficial className="white"/>
            </a>
            <NavSearchBar relevantUsers={this.props.arrayRelevantUsers} fetchRelevantUsers={this.props.fetchRelevantUsers} fetc/>
          </div>
            <div id="headerNavMenu">
              <div id="menu1">
                <Link title={"Profile"} to={`/profile/${this.props.currentUser.id}/timeline`} id={"profilelink"}>
                  <ProfileIcon imgUrl={this.props.currentUserProfile.profileImgUrl} className="profileIcon"/>
                  <h3 className="firstName">{firstName}</h3>
                </Link>
                  <Link to='/home'>Home</Link>
              </div>
              <div id="menu2">
                <div ref="friendRequestsDrop" id="friendRequestsDrop" >
                  <div title={"Friend Requests"} onClick={this.showRequests}> <FaGroup className="icon" /></div>
                  {this.state.showRequests ? this.renderFriendsRequests() : ""}
                </div>
                <div id="messagingRequestsDrop">
                  <this.MessageDropDown/>
                </div>
                <FaGlobe className="icon"/>
              </div>
              <div id="menu3">
                <FaQuestionCircle  className="icon"/>
                <div className="dropDown" title="Log Out">
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
