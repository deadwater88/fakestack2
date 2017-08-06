import React from 'react';
import {FaChevronDown, FaPencil, FaCamera, FaUserPlus, FaCheck, FaGroup, FaPlus} from 'react-icons/lib/fa/';
import {Route, NavLink} from 'react-router-dom';
import Albums from './albums';
import AllPhotos from './all_photos';
import UploadModal from './upload_modal';

class Photos extends React.Component {
  constructor(props){
    super(props);
    this.state = {currentpath: this.props.location.pathname, modalIsOpen: false};
    this.currentpath = this.props.location.pathname;
    this.albumspath = this.props.location.pathname + '/album';
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    console.log("modal button fired");
    this.setState({modalIsOpen: true}, ()=> console.log(this.state))
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  render() {
    let authorized = true;
    return (
    <div className="photosContainer primaryContainer">
      <div className="sectionContainer">
        <div className="secondaryContainer">
          <div className="firstRowHeader">
            <h1>
              <FaCamera/>
              Photos
            </h1>
            {authorized ? (
              <div className="photos buttonContainer">
                <button id="createAlbum" className="headerButton item"> <FaPlus/> Create Album </button>
                <button id="addPhotosButton" onClick={this.openModal} className="headerButton item"> Add a Photo  </button>
                <UploadModal open={this.state.modalIsOpen} onRequestClose={this.closeModal}/>
              </div>
              ) : ""}
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
