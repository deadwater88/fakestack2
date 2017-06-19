import React from 'react';

class UnitFieldCheckbox extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.props.formInfo.handleChange;

  }

  render(){
    // options will be an array of values representing the possible radio selection values
    let {inputLabel, instruction, value} = this.props.formInfo
    return (

          <div className="entry radio">
            <h3> {inputLabel} </h3>
              <div className="subentry" >
                <form >
                  <input className="checkbox" type="checkbox" onChange={this.handleChange} checked={value} />
                </form>
              </div>
          </div>)
  }
}


export default UnitFieldCheckbox
