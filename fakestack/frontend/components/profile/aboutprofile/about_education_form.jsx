import React from 'react';
import UnitFormText from './unit_form_text';
import UnitFormArrayImg from './unit_form_array_img';
import UnitForm from './unit_form';
import CollegeFormContainer from './forms/college_form_container';
import {FaUser, FaPlus, FaPencil, FaClose} from 'react-icons/lib/fa/';


class AboutEducationForm extends React.Component {

    render (){

      return (
      <div className="propertyForm">
        <div className="propertyContainer">
          <h3 className="contentHeader"> COLLEGE </h3>
          <CollegeFormContainer/>
        </div>
        <div className="propertyContainer">
          <h3 className="contentHeader"> OTHER PLACES LIVED </h3>
        </div>
      </div>
    );
    }
}


export default AboutEducationForm;
