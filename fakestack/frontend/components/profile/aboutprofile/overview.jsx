import React from 'react';
import {FaPlus} from 'react-icons/lib/fa/';
import {Link} from 'react-router-dom';

class EditPlacesForm extends React.Component {

    render (){
      const overviews = [['Add a workplace', "work", "work", "Worked at"],
                        ['Add a school', "education", "education", "Attended"],
                        ['Add a your current city', "places", "currentCity", "Lives in"],
                        ['Add your hometown', "places", "hometown", "From"]];
      const {currentUserProfile, viewedUserProfile} = this.props;
      const currentViewId = this.props.match.params.id;
      const editCheck = currentUserProfile.id === currentViewId ? {}: {display: "none"};
      return (
      <div className="propertyForm">
        <ul id="overviewItems">
            {overviews.map((overviewitem, idx)=>(
               viewedUserProfile[overviewitem[2]] ?
              (<li key={"overviewitem" + idx} className="overviewItem">
                <Link to={`/profile/${this.props.match.params.userId}/edit/${overviewitem[1]}`}>
                  <div className="imgPropContent addContent overview" >
                    <p className= "overviewTitle value"> {`${overviewitem[3]} ${viewedUserProfile[overviewitem[2]]}`} </p>
                  </div>
                </Link>
              </li>)
                 :
              <li key={"overviewitem" + idx} className="overviewItem"  style={editCheck}>
                <Link to={`/profile/edit/${overviewitem[1]}`}>
                (<div className="imgPropContent addContent overview" >
                  <FaPlus/>
                  <p className= "overviewTitle"> {overviewitem[0]} </p>
                </div>)
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
    }
}


export default EditPlacesForm;
