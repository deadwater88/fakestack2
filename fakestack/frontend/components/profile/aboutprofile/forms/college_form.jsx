import React from 'react';
import UnitFieldText from '../unitfields/unit_field_text';
import UnitFieldString from '../unitfields/unit_field_string';
import UnitFieldTimePeriod from '../unitfields/unit_field_timeperiod';
import UnitFieldRadio from '../unitfields/unit_field_radio';
import UnitFieldCheckbox from '../unitfields/unit_field_checkbox';
import {FaUser, FaPlus, FaPencil, FaClose} from 'react-icons/lib/fa/';
import merge from 'lodash/merge';


class CollegeForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { school: "",
                   start_date: {year: "", month: ""},
                   end_date: {year: "", month: ""},
                   description: "",
                   graduated: false,
                   concentrations: "",
                   college_type: 'College',
                   id: false,
                   editMode: false
    };

    if (this.props.schoolHistory){
      let {school, startDate, endDate, collegeType, concentrations, description, graduated, id} = this.props.schoolHistory;
      this.state = {
        school, college_type: collegeType, start_date: startDate, end_date: endDate, description, id, graduated, concentrations, editMode: true
      };
      }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  handleSubmit() {
    let {school, start_date, end_date, description, graduated, concentrations, college_type, id} = this.state;
    let props = {school, start_date, end_date, description, graduated, concentrations, college_type, id};
    // props.start_date = ${props.start_date.year} ${props.start_date.month};
    // props.end_date = `${props.end_date.year} ${props.end_date.month}`;
    props.concentrations = [props.concentrations];
    this.props.updateProfileProp({school_history: props}, 'schoolhistories');
    let toggle = this.props.toggleEditMode || this.toggleEditMode;
    toggle();
  }

  handleChange(prop) {
    return (e) => {
      this.setState({[prop]: e.target.value});
    };
  }

  handleCheckbox(prop){
    return (e) => {
    this.setState({[prop]: e.target.checked});
  };}

  handleDateChange(prop) {
    return (e) => {
      e.preventDefault();
      let newstate = merge(this.state[prop], {[e.target.name]: e.target.value});
      this.setState({[prop]: newstate});
    };
  }

  toggleEditMode() {
    this.setState({editMode: !this.state.editMode});
  }

  renderHeader() {
    return (
      this.state.editMode ? "" :
      <div onClick={this.toggleEditMode} className="imgPropContent addContent">
        <FaPlus/>
        <a> {'Add a college'} </a>
      </div>
    );
  }

  renderForm(){
    let schoolFormInfo = {inputLabel: "School", value:this.state.school, instruction: "What school did you attend?", handleChange: this.handleChange('school')};
    let timePeriodInfo = {inputLabel: "TimePeriod", value: {start_date:this.state.start_date, end_date:this.state.end_date}, instruction: "", handleChangeStart: this.handleDateChange('start_date'), handleChangeEnd: this.handleDateChange('end_date')};
    let descriptionInfo = {inputLabel: "Description", value:this.state.description, instruction: "", handleChange: this.handleChange('description')};
    let graduatedInfo = {inputLabel: "Graduated", value:this.state.graduated, instruction: "", handleChange: this.handleCheckbox('graduated')};
    let concentrationInfo = {inputLabel: "Concentration", value:this.state.concentrations, instruction: "", handleChange: this.handleChange('concentrations')};
    let attendedInfo = {inputLabel: "Attended for", value:this.state.college_type, instruction: "", options: ['College', 'Graduate School'], handleChange: this.handleChange('college_type')};
    return (
      <div className="propForm">
        <UnitFieldString formInfo={schoolFormInfo}/>
        <UnitFieldTimePeriod formInfo={timePeriodInfo} />
        <UnitFieldText formInfo={descriptionInfo}/>
        <UnitFieldCheckbox formInfo={graduatedInfo}/>
        <UnitFieldString formInfo={concentrationInfo}/>
        <UnitFieldRadio formInfo={attendedInfo}/>
        <div className="formButtons">
          <button onClick={this.handleSubmit} className="submitForm"> Save Changes </button>
          <button onClick={this.props.toggleEditMode || this.toggleEditMode} className="cancelForm"> Cancel </button>
        </div>
      </div>
    );

  }

  render(){
    let formStyle = this.state.editMode ? {} : {display: 'none'};
    return (

        <div className="imgPropUnit">
          { this.state.editMode ? "" : this.renderHeader(formStyle)}
          { this.state.editMode ? this.renderForm() : ""}
        </div>);
  }
}

export default CollegeForm;
