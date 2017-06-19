import React from 'react';
import UnitFieldText from '../unitfields/unit_field_text'
import UnitFieldString from '../unitfields/unit_field_string'
import UnitFieldTimePeriod from '../unitfields/unit_field_timeperiod'
import UnitFieldRadio from '../unitfields/unit_field_radio'


class CollegeForm extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    "do"
  }



  render(){
    return (
    <div className="propertyContainer">
      <h3 className="contentHeader"> COLLEGE </h3>
        <div className="imgPropUnit">
          <form className="propForm">
            <UnitFieldString formInfo={{inputLabel: "School", instruction: "What school did you attend?"}}/>
            <UnitFieldText formInfo={{inputLabel: "Description", instruction: ""}}/>
            <UnitFieldTimePeriod formInfo={{inputLabel: "Time Period", instruction: ""}} />
            <UnitFieldString formInfo={{inputLabel: "Concentration", instruction: ""}}/>
            <UnitFieldRadio formInfo={{inputLabel: "Attended for", instruction: ""}}/>
            <div className="formButtons">
              <button onClick={this.handleSubmit} className="submitForm"> Save Changes </button>
              <button onClick={this.toggleEditMode} className="cancelForm"> Cancel </button>
            </div>
          </form>
        </div>
    </div>)
  }
}

export default CollegeForm
