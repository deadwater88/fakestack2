import React from 'react';
import {FaUser, FaPlus} from 'react-icons/lib/fa/';
import {Route, NavLink} from 'react-router-dom';
import UnitForm from './unit_form';
import EditDetailsContainer from './edit_details_container';
import EditPlacesContainer from './edit_places_container';
import UnitFormArrayImg from './unit_form_array_img';
import OverviewContainer from './overview_container';

class EditProfile extends React.Component {

  constructor(props) {
    super(props);
    this.profileDetails = [["Overview", "overview"],
                           ["Places You've Lived", "places"],
                           ["Details About You", "details"]];
    this.navLinks = this.navLinks.bind(this);
  }

  componentWillReceiveProps(newProps){
  }

  navLinks(){
    return (<ul id= "editProfileTabs">
      {this.profileDetails.map((detail, idx)=>(
          <NavLink className="navLink" key={idx + "profilenav"}
            to={`/profile/about/${detail[1]}`}
            activeClassName="activeLink"
            activeStyle={{ fontWeight: 'bold', color: 'black' }}>
            {detail[0]}
          </NavLink>
      ))}
    </ul>);
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
          <Route path='/profile/about/overview' component={OverviewContainer} />
          <Route path='/profile/about/places'   component={EditPlacesContainer}/>
          <Route path='/profile/about/details' component={EditDetailsContainer} />

        </div>
      </div>
    );

  }

}

export default EditProfile;
