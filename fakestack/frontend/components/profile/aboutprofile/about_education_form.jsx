import React from 'react';
import UnitFormText from './unit_form_text';
import UnitFormArrayImg from './unit_form_array_img';
import UnitForm from './unit_form';
import CollegeFormContainer from './forms/college_form_container';
import {FaUser, FaPlus, FaPencil, FaClose} from 'react-icons/lib/fa/';
import CollegeForm from './forms/college_form';

class AboutEducationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {editIndex: this.props.schoolHistories.map(()=> false)};
    this.toggleEditMode = this.toggleEditMode.bind(this);

  }

  toggleEditMode(idx){
    return ()=> {
      let editIndex = this.state.editIndex;
      editIndex[idx] = !editIndex[idx];
      this.setState({editIndex});
    };
  }

  educationHeader(schoolHistory){
    let header = [];
    let endYear = schoolHistory.endDate.year;
    let concentration = schoolHistory.concentration;
    let location = schoolHistory.location;
    if (schoolHistory['graduated'] && endYear ) {
      header.push(`Class of ${endYear}`);
    }
    if (concentration) {
      header.push(concentration);
    }
    if (location) {
      header.push(location);
    }
    return header.join(" \u00B7 ");

  }

    renderEducation(schoolHistory, idx){
      let editMode = this.state.editIndex[idx];
      let header = this.educationHeader(schoolHistory);
      return editMode ? <CollegeFormContainer toggleEditMode={this.toggleEditMode(idx)} schoolHistory={schoolHistory} key={idx + "schoolHistory"} /> : (<div key={"schoolHistory" + idx} className="imgPropContent showContent">
        <FaPlus/>
        <div className= "infoDisplay">
          <div className="valueDisplay">
            <h1 className="boldBlue">
              {schoolHistory.school}
            </h1>
            <p className="standard"> {header} </p>
            <p className="gray standard"> {schoolHistory.description} </p>
          </div>
          <div onClick={this.toggleEditMode(idx)} className="editDisplay" >
            <a>
              <FaPencil/>
              Edit
            </a>
            <div onClick={this.deleteProp} className= "deletePropButton">
              <FaClose/>
            </div>
          </div>

        </div>
      </div>);
    }

    render (){
      let currentUser = this.props.currentUserProfile.id === this.props.viewedUserProfile.id;

      return (
      <div className="propertyForm">
        <div className="propertyContainer">
          <h3 className="contentHeader"> COLLEGE </h3>
          {this.props.schoolHistories.map((schoolHistory, idx)=>{
            return this.renderEducation(schoolHistory,idx);
          })}
          {currentUser ?  <CollegeFormContainer/> : "" }
        </div>
      </div>
    );
    }
}


export default AboutEducationForm;
