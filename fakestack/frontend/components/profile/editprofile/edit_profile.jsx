import React from 'react';
import {FaUser, FaPlus} from 'react-icons/lib/fa/';
import {Route, NavLink} from 'react-router-dom';
import UnitForm from './unit_form'
import EditDetailsContainer from './edit_details_container'


class EditProfile extends React.Component {

  constructor(props) {
    super(props)
    this.profileDetails = [["Overview", "overview"],
                           ["Places You've Lived", "places"],
                           ["Details About You", "details"]]
    this.navLinks = this.navLinks.bind(this)
    this.content = this.content.bind(this)
  }

  componentWillReceiveProps(newProps){
  }

  navLinks(){
    return (<ul id= "editProfileTabs">
      {this.profileDetails.map((detail, idx)=>(
          <NavLink className="navLink" key={idx + "profilenav"}
            to={`/profile/edit/${detail[1]}`}
            activeClassName="activeLink"
            activeStyle={{ fontWeight: 'bold', color: 'black' }}>
            {detail[0]}
          </NavLink>
      ))}
    </ul>)
  }

  content() {
    let profileInfoCurrentCity = {updateProp: this.props.updateProp,
                         instruction: "Add your current city",
                         inputLabel: "Current City",
                         propName: "current_city",
                         value: this.props.currentUserProfile.currentCity}
    let profileInfoHometown = {updateProp: this.props.updateProp,
                         instruction: "Add your hometown",
                         inputLabel: "Hometown",
                         propName: "hometown",
                     value: this.props.currentUserProfile.hometown}
     let profileInfoPlaces = {updateProp: this.props.updateProp,
                          instruction: "Add a Place",
                          inputLabel: "Place",
                          propName: "place",
                          value: this.props.currentUserProfile.places}
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
      <UnitForm profileInfo={profileInfoPlaces}
        currentUserProfile={this.props.currentUserProfile}
        updateProp={this.props.updateProp} />
    </div>
    )
  }

  render(){
    return (
      <div id="editProfile" className="primaryContainer">
        <h1>
          <FaUser/>
          <a>About</a>
        </h1>
        <div id="editProfileContent"  className="primaryContent">
          {this.navLinks()}
          <Route path='/profile/edit/places' render={this.content}/>
          <Route path='/profile/edit/details' component={EditDetailsContainer} />

        </div>


      </div>
    )

  }

}

export default EditProfile;
