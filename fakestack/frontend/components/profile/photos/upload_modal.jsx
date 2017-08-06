import React from 'react';
import Modal from 'react-modal';
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
    this.state = {files: props.files};
    this.state.modalprops = {style: customStyles,
                  onAfterOpen: this.onAfterOpen,
                  onRequestClose: props.onRequestClose,
                  contentLabel: "upload-modal",
                  closeTimeoutMS: 50};
                  Modal.setAppElement('body');
  }

  componentWillReceiveProps(newProps){
    let files = newProps.files;
    this.setState({files});
    debugger;
  }

  onAfterOpen(){
    console.log("opened Modal");
  }


  render(){
    return (
      <Modal
        {...this.state.modalprops} isOpen={this.props.open}>
        <div className="uploadModal">
          <div className="uploadModalScreen">

          </div>
          <div className="uploadModalContent">
            UploadModal
            {this.state.files.map((file)=>{
              console.log(file);
              return <div key={file.name}>
                {file.name}
              </div>;
            })}
          </div>
        </div>
      </Modal>
    );
  }
}

export default UploadModal;
