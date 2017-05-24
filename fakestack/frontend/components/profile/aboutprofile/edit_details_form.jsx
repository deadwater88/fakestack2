import React from 'react';
import UnitFormText from './unit_form_text';
import UnitFormArray from './unit_form_array';


class EditDetailsForm extends React.Component {

    render (){
    let editCheck = this.props.currentUserProfile.id === this.props.viewedUserProfile.id ? {}: {display: "none"};
    const biographyInfo = {updateProp: this.props.updateProp,
                             instruction: "Write some details about yourself",
                             inputLabel: "About You",
                             propName: "biography",
                             value: this.props.viewedUserProfile.biography};
    const otherNamesInfo = {updateProp: this.props.updateProp,
                             instruction: "Add a nickname or alternate name...",
                             inputLabel: "Name",
                             propName: "other_names",
                             values: this.props.viewedUserProfile.otherNames};
    const favoriteQuotesInfo = {updateProp: this.props.updateProp,
                             instruction: "Add your favorite quotations",
                             inputLabel: "Favorite Quotes",
                             propName: "favorite_quotes",
                             value: this.props.viewedUserProfile.favoriteQuotes};
    const {updateProp, viewedUserProfile} = this.props;

      return (
      <div className="propertyForm">
        <div className="propertyContainer">
          <h3 className="contentHeader"> ABOUT YOU </h3>
          <UnitFormText profileInfo={biographyInfo}
            viewedUserProfile={viewedUserProfile}
            updateProp={updateProp}/>
        </div>
        <div className="propertyContainer">
          <h3 className="contentHeader"> OTHER NAMES </h3>
          <UnitFormArray profileInfo={otherNamesInfo}
            viewedUserProfile={viewedUserProfile}
            updateProp={updateProp}/>
        </div>
        <div className="propertyContainer">
          <h3 className="contentHeader"> FAVORITE QUOTES </h3>
            <UnitFormText profileInfo={favoriteQuotesInfo}
              viewedUserProfile={viewedUserProfile}
              updateProp={updateProp}/>
        </div>
      </div>);
    }
}


export default EditDetailsForm;
