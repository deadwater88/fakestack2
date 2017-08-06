import React from 'react';
import {FaChevronDown, FaPencil, FaCamera, FaUserPlus, FaCheck, FaGroup, FaPlus} from 'react-icons/lib/fa/';
import {Route, NavLink} from 'react-router-dom';
import Albums from './albums';
import AllPhotos from './all_photos';
import values from 'lodash/values';

class Photos extends React.Component {
  constructor(props){
    super(props);
    this.state = {currentpath: this.props.location.pathname};
    this.currentpath = this.props.location.pathname;
    this.albumspath = this.props.location.pathname + '/album';
  }


  render() {
    let authorized = true;
    return (
    <div className="friendsContainer primaryContainer">
      <div className="sectionContainer">
        <div className="secondaryContainer">
          <div className="firstRowheader">
            <h1>
              <FaCamera/>
              "Photos"
            </h1>
            <div className="friend buttonContainer">
              {authorized ? (
                <button id="addPhotosButton" className="headerButton item"> Add a Photo  </button>
                ) : ""}
              <button id="createAlbum" className="headerButton item"> <FaPlus/> Create Album </button>
            </div>
          </div>
          <h4>
            <NavLink className="navLink"
              to={`${this.currentpath}`}
              activeClassName="activeLink"
              exact={true}
              activeStyle={{ fontWeight: 'bold', color: 'black' }}>
              Photos of You
            </NavLink>

            <NavLink className="navLink"
                to={`${this.albumspath}`}
                activeClassName="activeLink"
                activeStyle={{ fontWeight: 'bold', color: 'black' }}>
                Albums
            </NavLink>

          </h4>
          <div className="primaryContent">
            <Route exact={true} path={`${this.currentpath}`} component={AllPhotos}></Route>
            <Route path={`${this.albumspath}`} component={Albums}></Route>

          </div>
        </div>
      </div>
    </div>);
  }

}

export default Photos;
