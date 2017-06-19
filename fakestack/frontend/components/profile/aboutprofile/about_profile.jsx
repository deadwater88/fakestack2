import React from 'react'
import {FaUser, FaPlus} from 'react-icons/lib/fa/'
import {Route, NavLink} from 'react-router-dom'
import UnitForm from './unit_form'
import AboutDetailsContainer from './about_details_container'
import AboutPlacesContainer from './about_places_container'
import UnitFormArrayImg from './unit_form_array_img'
import OverviewContainer from './overview_container'
import FriendsContainer from '../friends/friends_container'
import AboutEducationContainer from './about_education_container'

class AboutProfile extends React.Component {

  constructor(props) {
    super(props);
    // Array for constructing NavLinks in the form of ['label', 'urldirection']
    this.profileDetails = [["Overview", "overview"],
                           ["Places You've Lived", "places"],
                           ["Work and Education", "education"],
                           ["Details About You", "details"]];
    this.navLinks = this.navLinks.bind(this);
  }

  componentWillReceiveProps(newProps){
  }

  navLinks (){
    return (<ul id= "editProfileTabs">
      {this.profileDetails.map((detail, idx)=>(
          <NavLink className="navLink" key={idx + "profilenav"}
            to={`/profile/${this.props.match.params.userId}/about/${detail[1]}`}
            activeClassName="activeLink"
            activeStyle={{ fontWeight: 'bold', color: 'black' }}>
            {detail[0]}
          </NavLink>
      ))}
    </ul>);
  }

  render (){
    return (
      <div>
        <div id="editProfile" className="primaryContainer">

          <h1>
            <FaUser/>
            <a>About</a>
          </h1>
          <div id="editProfileContent"  className="primaryContent">
            {this.navLinks()}
            <Route path='/profile/:userId/about/overview' component={OverviewContainer} />
            <Route path='/profile/:userId/about/places'   component={AboutPlacesContainer}/>
            <Route path='/profile/:userId/about/details' component={AboutDetailsContainer} />
            <Route path='/profile/:userId/about/education' component={AboutEducationContainer} />

          </div>
        </div>
        <FriendsContainer/>
      </div>
    );

  }

}

export default AboutProfile;
