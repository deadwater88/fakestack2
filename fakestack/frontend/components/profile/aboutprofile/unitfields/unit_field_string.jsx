import React from 'react';

class UnitFieldString extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.props.handleChange;

  }

  render(){
    let {inputLabel, instruction} = this.props.formInfo
    return (

          <div className="entry">
            <h3> {inputLabel} </h3>
            <div>
              <input onChange={this.handleChange} type="text" placeholder={instruction} />
            </div>
          </div>)
  }
}


export default UnitFieldString
