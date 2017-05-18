import React from 'react';
import ProfileHeader from './profile_header';
import HeaderContainer from '../header_nav/header_container';
import {FaGlobe, FaCircle} from 'react-icons/lib/fa/';
class Profile extends React.Component{
  constructor(props){
      super(props);
  }

  render(){

    return (
      <div id="profilePage">
        <ProfileHeader/>
         <div id="panelContainer">
           <div className="left Panel">
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
           <div className="right Panel">
             RightPanel
           </div>
        </div>
      </div>
    );

  }

}

export default Profile;
