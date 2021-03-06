import React from 'react';
import {FaSearch} from 'react-icons/lib/fa/';
import ProfileIcon from '../profile/profile_icon';
import {Link} from 'react-router-dom';


class NavSearchBar extends React.Component {
  constructor(props){
    super(props);
       this.state = {filteredUsers: []};
    this.filterUsers = this.filterUsers.bind(this);
    this.setFilterCall = this.setFilterCall.bind(this);
  }

  setFilterCall(e){
    e.preventDefault();
    let value = e.currentTarget.value;
    clearTimeout(this.filterCall);
    if (value.length >= 3) {
      this.filterCall = setTimeout(()=> this.filterUsers(value), 1000);
    }
  }


  filterUsers (query) {
    this.setState({query});
    this.props.fetchRelevantUsers(query).then(()=>{
      this.setState({filteredUsers: this.props.relevantUsers});
    });


  }

  componentwillreceiveprops(newProps){
    this.setState({filteredUsers: newProps.relevantUsers});
  }

  noUsers() {
    return (
      <h3 id="searchNoResults"> No results for {this.state.query} </h3>
    );
  }


  render (){
    const filteredUsers = this.state.filteredUsers;
    return (
    <div id="NavSearchBar" className="dropDown">
        <input onChange={this.setFilterCall} type="text" className="searchFriends" placeholder="Find Friends" />
        <ul id="searchFriends" className="dropDown-content">
          {filteredUsers.length == 0 ? this.noUsers() : filteredUsers.map((user,idx) => (
            <Link className="friendSearch" key={"friendsearch" + idx} to={`/profile/${user.id}/timeline`}>
              <ProfileIcon className="searchIcon" imgUrl={user.profileImgUrl} />
              <h5 className="searchFriends"> {`${user.firstName} ${user.lastName}`}  </h5>
            </Link>
          ))}
        </ul>
        <button id="searchButton">
          <FaSearch/>
        </button>
    </div>);
  }

}

export default NavSearchBar;
