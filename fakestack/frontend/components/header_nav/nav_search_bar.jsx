import React from 'react';
import {FaSearch} from 'react-icons/lib/fa/';
import ProfileIcon from '../profile/profile_icon';
import {Link} from 'react-router-dom';


class NavSearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {filteredUsers: this.props.relevantUsers}
    this.filterUsers = this.filterUsers.bind(this)
  }

  filterUsers (e) {
    e.preventDefault;
    let input = e.currentTarget.value.toLowerCase()
    let filteredUsers = this.props.relevantUsers.filter((user)=> {
      const [firstName, lastName] = [user.firstName, user.lastName].map((word) => word.toLowerCase())
      return (firstName.match(input) || lastName.match(input))
    })
    this.setState({filteredUsers})

  }


  render (){
    const filteredUsers = this.state.filteredUsers
    return (
    <div id="NavSearchBar" className="dropDown">
        <input onChange={this.filterUsers} type="text" className="searchFriends" placeholder="Find Friends" />
        <ul id="searchFriends" className="dropDown-content">
          {filteredUsers.map((user,idx) => (
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
