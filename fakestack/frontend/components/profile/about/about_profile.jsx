import React from 'react';
import {FaUser, FaPlus} from 'react-icons/lib/fa/';
import {Route, NavLink} from 'react-router-dom';
import UnitForm from './unit_form';
import AboutDetailsContainer from './edit_details_container';
import AboutPlacesContainer from './edit_places_container';
import UnitFormArrayImg from './unit_form_array_img';
import OverviewContainer from './overview_container';

class AboutProfile extends React.Component {

  constructor(props) {
    super(props);
    this.profileDetails = [["Overview", "overview"],
                           ["Places You've Lived", "places"],
                           ["Details About You", "details"]];
    this.navLinks = this.navLinks.bind(this);
  }

  componentWillReceiveProps(newProps){
  }

  navLinks(userId){
    return (<ul id= "editProfileTabs">
      {this.profileDetails.map((detail, idx)=>(
          <NavLink className="navLink" key={idx + "profilenav"}
            to={`/profile/${userId}/about/${detail[1]}`}
            activeClassName="activeLink"
            activeStyle={{ fontWeight: 'bold', color: 'black' }}>
            {detail[0]}
          </NavLink>
      ))}
    </ul>);
  }

  render(){
    const userId = this.props.match.params.userId;
    return (
      <div id="editProfile" className="primaryContainer">
        <h1>
          <FaUser/>
          <a>About</a>
        </h1>
        <div id="editProfileContent"  className="primaryContent">
          {this.navLinks(userId)}
          <Route path={`/profile/${userId}/about/overview`} component={OverviewContainer} />
          <Route path={`/profile/${userId}/aboutplaces`} component={AboutPlacesContainer} />
          <Route path={`/profile/${userId}/about/details`} component={AboutDetailsContainer} />

        </div>
      </div>
    );

  }

}

export default AboutProfile;
