import React from 'react';

class UnitFieldString extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.props.formInfo.handleChange;

  }

  render(){
    let {inputLabel, instruction, value} = this.props.formInfo
    return (

          <div className="entry">
            <h3> {inputLabel} </h3>
            <div>
              <input value={value} onChange={this.props.formInfo.handleChange} type="text" placeholder={instruction} />
            </div>
          </div>)
  }
}


export default UnitFieldString
