import React from 'react';


class NavSearchBar extends React.Component {
  constructor(props){
    super(props);
  }


  render (){

    return (
  <div id="NavSearchBar">
      <input type="text" placeholder="Search FakeStack" />
  </div>);
  }

}

export default NavSearchBar;
