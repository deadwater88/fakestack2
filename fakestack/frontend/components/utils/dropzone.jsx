import Dropzone from 'react-dropzone';
import React from 'react';


class DropZone extends React.Component {
  constructor(props){
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(files){
    const file = files[0];
    $.ajax({
      method: "GET",
      url: `api/s3keys?filename=${file.name}&filetype=${file.type}`
    }).then((result)=>{
      return  $.ajax.post(result.data);
    }).then((res) => console.log(res), (err) => console.log(err));
  }

  render(){
    return (
      <Dropzone onDrop={this.onDrop} size={ 150}>
        <div>
          DropZone Area
        </div>
      </Dropzone>
    );
  }


}

export default DropZone
