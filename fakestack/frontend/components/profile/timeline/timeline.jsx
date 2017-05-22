import React from 'react';
import ProfileDetailsContainer from './profile_details_container';
import WallContainer from './wall_container';

const Timeline = (props) => {
    return (
      <div id="panelContainer" className="timeline">
        <div className="left Panel">
          <ProfileDetailsContainer/>
        </div>
        <WallContainer >
        </WallContainer>
      </div>
    )

}

export default Timeline;
