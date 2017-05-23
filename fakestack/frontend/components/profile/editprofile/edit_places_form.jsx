import React from 'react';
import UnitFormText from './unit_form_text';
import UnitFormArrayImg from './unit_form_array_img';
import UnitForm from './unit_form';


class EditPlacesForm extends React.Component {

    render (){
      let profileInfoCurrentCity = {
                           instruction: "Add your current city",
                           inputLabel: "Current City",
                           propName: "current_city",
                           value: this.props.currentUserProfile.currentCity};
      let profileInfoHometown = {
                           instruction: "Add your hometown",
                           inputLabel: "Hometown",
                           propName: "hometown",
                       value: this.props.currentUserProfile.hometown};
       let profileInfoPlaces = {
                            instruction: "Add a Place",
                            inputLabel: "Place",
                            propName: "places",
                            values: this.props.currentUserProfile.places};
      return (
      <div className="propertyForm">
        <div className="propertyContainer">
          <h3 className="contentHeader"> CURRENT CITY AND HOMETOWN </h3>
          <UnitForm profileInfo={profileInfoCurrentCity}
            currentUserProfile={this.props.currentUserProfile}
            updateProp={this.props.updateProp} />
          <UnitForm profileInfo={profileInfoHometown}
            currentUserProfile={this.props.currentUserProfile}
            updateProp={this.props.updateProp} />
        </div>
        <div className="propertyContainer">
          <h3 className="contentHeader"> OTHER PLACES LIVED </h3>
        </div>
        <UnitFormArrayImg profileInfo={profileInfoPlaces}
          currentUserProfile={this.props.currentUserProfile}
          updateProp={this.props.updateProp} />
      </div>
    );
    }
}


export default EditPlacesForm;
