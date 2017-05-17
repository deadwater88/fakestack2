import React from 'react';
import {FaSearch} from 'react-icons/lib/fa/';

class NavSearchBar extends React.Component {
  constructor(props){
    super(props);
  }


  render (){

    return (
  <div id="NavSearchBar">
      <input type="text" placeholder="Search FakeStack" />
      <button id="searchButton">
        <FaSearch/>
      </button>
  </div>);
  }

}

export default NavSearchBar;
