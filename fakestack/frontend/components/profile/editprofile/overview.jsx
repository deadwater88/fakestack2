import React from 'react';
import {FaPlus} from 'react-icons/lib/fa/';
import {Link} from 'react-router-dom';

class EditPlacesForm extends React.Component {

    render (){
      const overviews = [['Add a workplace', "work", "work", "Worked at"],
                        ['Add a school', "education", "education", "Attended"],
                        ['Add a your current city', "places", "currentCity", "Lives in"],
                        ['Add your hometown', "places", "hometown", "From"]];
      const currentProfile = this.props.currentUserProfile;
      return (
      <div className="propertyForm">
        <ul id="overviewItems">
            {overviews.map((overviewitem, idx)=>(
              <li key={"overviewitem" + idx} className="overviewItem">
                <Link to={`/profile/edit/${overviewitem[1]}`}>
                  {currentProfile[overviewitem[2]] ?
                  (<div className="imgPropContent addContent overview" >
                  <p className= "overviewTitle value"> {`${overviewitem[3]} ${currentProfile[overviewitem[2]]}`} </p>

                  </div>
                ) :
                (<div className="imgPropContent addContent overview">
                <FaPlus/>
                <p className= "overviewTitle"> {overviewitem[0]} </p>
              </div>)

                }
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
    }
}


export default EditPlacesForm;
