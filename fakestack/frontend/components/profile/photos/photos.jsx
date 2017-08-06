import React from 'react';
import {FaChevronDown, FaPencil, FaCamera, FaUserPlus, FaCheck, FaGroup, FaPlus} from 'react-icons/lib/fa/';
import {Route, NavLink} from 'react-router-dom';
import Albums from './albums';
import AllPhotos from './all_photos';
import UploadModal from './upload_modal';

class Photos extends React.Component {
  constructor(props){
    super(props);
    this.state = {currentpath: this.props.location.pathname, modalIsOpen: false, uploadedFiles: []};
    this.currentpath = this.props.location.pathname;
    this.albumspath = this.props.location.pathname + '/album';
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e){
    let files = e.target.files;
    this.setState({modalIsOpen: true, uploadedFiles: files});
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
                <label id="addPhotosButton" className="headerButton item">
                  <input className="fileInput" type="file" onChange={this.openModal} multiple/>
                  Add a Photo
                </label>
                <UploadModal open={this.state.modalIsOpen} files={this.state.uploadedFiles} onRequestClose={this.closeModal}/>
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
