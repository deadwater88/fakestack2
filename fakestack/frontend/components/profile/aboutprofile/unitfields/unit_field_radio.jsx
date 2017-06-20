import React from 'react';

class UnitFieldRadio extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.props.formInfo.handleChange;

  }

  render(){
    // options will be an array of values representing the possible radio selection values
    let {inputLabel, instruction, options, value} = this.props.formInfo
    return (

          <div className="entry radio">
            <h3> {inputLabel} </h3>
              <div className="subentry" >
                <form onChange={this.handleChange} >
                  {options.map((option, idx) =>{
                    return (
                    <div key={"radio" + idx} className="radio">
                        <label>
                          <input name={'radio'} type="radio" value={option} onChange={this.handleChange} checked={value === option}/>
                          {option}
                        </label>
                    </div>)
                  })}
                </form>
              </div>
          </div>)
  }
}


export default UnitFieldRadio
