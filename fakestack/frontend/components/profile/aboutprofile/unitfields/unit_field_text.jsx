import React from 'react';

class UnitFieldText extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.props.handleChange;

  }

  render(){
    let {inputLabel, instruction, count} = this.props.formInfo
    count = (count || 1)
    return (

          <div className="entry text">
            <h3> {inputLabel} </h3>
              <div>
                <textarea onChange={this.handleChange} type="text" placeholder={instruction} />
              </div>
          </div>)
  }
}


export default UnitFieldText
