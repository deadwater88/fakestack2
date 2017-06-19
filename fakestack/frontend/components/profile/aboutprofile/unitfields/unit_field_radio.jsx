import React from 'react';

class UnitFieldRadio extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.props.handleChange;

  }

  render(){
    let {inputLabel, instruction, options} = this.props.formInfo
    options = ['option1', 'option2', 'option3', 'option4']
    return (

          <div className="entry radio">
            <h3> {inputLabel} </h3>
              <div className="subentry">
                <form>
                  {options.map((option, idx) =>{
                    return (
                    <div key={"radio" + idx} className="radio">
                        <label>
                          <input type="radio" value={option} checked={idx == 0 ? true : ""}/>
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
