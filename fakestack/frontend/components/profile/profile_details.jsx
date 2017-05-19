import React from 'react';
import {FaGlobe, FaCircle} from 'react-icons/lib/fa/';
class ProfileDetails extends React.Component {

  render(){

    return(
      <div id="profile">
        <section className="intro">
          <h1 className="intro">

            <div id="circleIcon">
              <FaCircle id="circle">
              </FaCircle>
              <FaGlobe id="globe"/>
            </div>
            Introduction
          </h1>
         <h5>Test Introduction</h5>
        </section>
        <ul id="profileDetails">
          <li className= "profileDetail"> <FaGlobe/> Test Profile Detail</li>
        </ul>
      </div>
    );
  }
}

export default ProfileDetails;
