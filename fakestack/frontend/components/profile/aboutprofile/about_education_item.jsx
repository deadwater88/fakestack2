import React from 'react';
import CollegeFormContainer from './forms/college_form_container';
import {FaUser, FaPlus, FaPencil, FaClose} from 'react-icons/lib/fa/';

class AboutEducationItem extends React.Component {

    renderEducation(){
      return (<div key={"value"} className="imgPropContent showContent">
        <FaPlus/>
        <div className= "infoDisplay">
          <div className="valueDisplay">
            <h1 className="boldBlue">
              {'Berkeley'}
            </h1>
            <p className="standard"> "Class of 2014" {'\u00B7'} "Biochemistry" . "Berkeley,CA" </p>
            <p className="grayStandard"> Test Description A longer description. No one needs to know. How I test my profile. More stuff. Lorem Ipsum. More stuff. Do I wrap? I hope I do. </p>
          </div>
          <div onClick={this.toggleEditMode} className="editDisplay" >
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

      return (
      <div className="propertyForm">
        <div className="propertyContainer">
          <h3 className="contentHeader"> COLLEGE </h3>
          {this.renderEducation()}
          <CollegeFormContainer/>
        </div>
        <div className="propertyContainer">
          <h3 className="contentHeader"> OTHER PLACES LIVED </h3>
        </div>
      </div>
    );
    }
}


export default AboutEducationItem;
