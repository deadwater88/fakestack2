import React from 'react';
import Modal from 'react-modal';
import values from 'lodash/values';
import ProfileIcon from '../profile_icon';
import {FaClose} from 'react-icons/lib/fa/';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : null
  },
  overlay: {zIndex: 5000,
            backgroundColor: null}
};

class UploadModal extends React.Component {

  constructor(props){
    super(props);
    this.uploadPhotos = this.uploadPhotos.bind(this);
    this.state = {files: {}};
    this.state.modalprops = {style: customStyles,
                  onAfterOpen: this.onAfterOpen,
                  onRequestClose: props.onRequestClose,
                  contentLabel: "upload-modal",
                  closeTimeoutMS: 50};
                  Modal.setAppElement('body');
  }

  addFile(file){
    let files = this.state.files;
    files[file.name] = file;
    this.setState({files});
    const reader = new FileReader();
    reader.addEventListener("load", ()=> {
      file.src = reader.result;
      this.setState({files});
  }, false);
    reader.readAsDataURL(file);
  }

  componentWillReceiveProps(newprops){
    let filelist = newprops.files;
    for (let i = 0; i < filelist.length; i++) {
      this.addFile(filelist[i]);
    }
  }

  onAfterOpen(){
    console.log("opened Modal");
  }

  closeModal(e){
    e.preventDefault();
    this.setState({files:{}});
    this.props.onRequestClose();
  }

  uploadPhotos(e){
    e.preventDefault();
    this.props.uploadPhotos(this.state.files);
  }

  render(){
    let files = values(this.state.files);
    return (
      <Modal
        {...this.state.modalprops} isOpen={this.props.open}>
        <div className="uploadModal">
          <div className="uploadModalScreen">

          </div>

          <header className="uploadHeader">
            <h2 className="bold"> Upload Photos/Videos </h2>
            <FaClose onClick={this.closeModal} className="cancelUploadModal"/>
          </header>

          <div className="uploadInputForm">
            <ProfileIcon className="profileIcon"/>
            <input placeholder="Say something about this photo..." />
          </div>

          <li className="uploadedPhotosContainer">
            {files.map((file)=>{
              console.log(file);
              return <ul key={file.name} className="imageUpload">
                <img src={file.src}/>
              </ul>;
            })}
          </li>

          <div className="tags">

          </div>

          <div className="uploadbuttonContainer">
            <button onClick={this.uploadPhotos} className="blue-submit-button">
              Post
            </button>
          </div>

        </div>
      </Modal>
    );
  }
}

export default UploadModal;
