import React from 'react';

class UnitFieldText extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.props.formInfo.handleChange;

  }

  render(){
    let {inputLabel, instruction, value} = this.props.formInfo
    return (

          <div className="entry text">
            <h3> {inputLabel} </h3>
              <div>
                <textarea onChange={this.handleChange} type="text" placeholder={instruction} value={value} />
              </div>
          </div>)
  }
}


export default UnitFieldText
