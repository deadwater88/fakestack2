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
    zindex: '100000'
  }
};

class UploadModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {style: customStyles,
                  onAfterOpen: this.onAfterOpen,
                  onRequestClose: props.onRequestClose,
                  contentLabel: "upload-modal"};
  }

  onAfterOpen(){
    console.log("opened Modal");
  }


  render(){
    return (
      <Modal
        {...this.state} isOpen={this.props.open}>
        <div className="uploadModal">
          UploadModal
        </div>
      </Modal>
    );
  }
}

export default UploadModal;
