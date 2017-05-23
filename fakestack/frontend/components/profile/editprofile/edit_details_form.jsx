import React from 'react';
import UnitFormText from './unit_form_text';
import UnitFormArray from './unit_form_array';


class EditDetailsForm extends React.Component {


    render (){
    const biographyInfo = {updateProp: this.props.updateProp,
                             instruction: "Write some details about yourself",
                             inputLabel: "About You",
                             propName: "biography",
                             value: this.props.currentUserProfile.biography};
    const otherNamesInfo = {updateProp: this.props.updateProp,
                             instruction: "Add a nickname or alternate name...",
                             inputLabel: "Name",
                             propName: "other_names",
                             values: this.props.currentUserProfile.otherNames};
    const favoriteQuotesInfo = {updateProp: this.props.updateProp,
                             instruction: "Add your favorite quotations",
                             inputLabel: "Favorite Quotes",
                             propName: "favorite_quotes",
                             value: this.props.currentUserProfile.favoriteQuotes};
    const {updateProp, currentUserProfile} = this.props;

      return (
      <div className="propertyForm">
        <div className="propertyContainer">
          <h3 className="contentHeader"> ABOUT YOU </h3>
          <UnitFormText profileInfo={biographyInfo}
            currentUserProfile={currentUserProfile}
            updateProp={updateProp}/>
        </div>
        <div className="propertyContainer">
          <h3 className="contentHeader"> OTHER NAMES </h3>
          <UnitFormArray profileInfo={otherNamesInfo}
            currentUserProfile={currentUserProfile}
            updateProp={updateProp}/>
        </div>
        <div className="propertyContainer">
          <h3 className="contentHeader"> FAVORITE QUOTES </h3>
            <UnitFormText profileInfo={favoriteQuotesInfo}
              currentUserProfile={currentUserProfile}
              updateProp={updateProp}/>
        </div>
      </div>);
    }
}


export default EditDetailsForm;
