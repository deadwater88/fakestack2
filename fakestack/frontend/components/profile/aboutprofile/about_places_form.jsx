import React from 'react';
import UnitFormText from './unit_form_text';
import UnitFormArrayImg from './unit_form_array_img';
import UnitForm from './unit_form';


class AboutPlacesForm extends React.Component {

    render (){
      let editCheck = this.props.currentUserProfile.id === this.props.viewedUserProfile.id ? {}: {display: "none"};
      let profileInfoCurrentCity = {editCheck: editCheck,
                           instruction: "Add your current city",
                           inputLabel: "Current City",
                           propName: "current_city",
                           value: this.props.viewedUserProfile.currentCity};
      let profileInfoHometown = {editCheck: editCheck,
                           instruction: "Add your hometown",
                           inputLabel: "Hometown",
                           propName: "hometown",
                       value: this.props.viewedUserProfile.hometown};
       let profileInfoPlaces = {editCheck: editCheck,
                            instruction: "Add a Place",
                            inputLabel: "Place",
                            propName: "places",
                            values: this.props.viewedUserProfile.places};
      return (
      <div className="propertyForm">
        <div className="propertyContainer">
          <h3 className="contentHeader"> CURRENT CITY AND HOMETOWN </h3>
          <UnitForm profileInfo={profileInfoCurrentCity}
            viewedUserProfile={this.props.viewedUserProfile}
            updateProp={this.props.updateProp} />
          <UnitForm profileInfo={profileInfoHometown}
            viewedUserProfile={this.props.viewedUserProfile}
            updateProp={this.props.updateProp} />
        </div>
        <div className="propertyContainer">
          <h3 className="contentHeader"> OTHER PLACES LIVED </h3>
        </div>
        <UnitFormArrayImg profileInfo={profileInfoPlaces}
          viewedUserProfile={this.props.viewedUserProfile}
          updateProp={this.props.updateProp} />
      </div>
    );
    }
}


export default AboutPlacesForm;
