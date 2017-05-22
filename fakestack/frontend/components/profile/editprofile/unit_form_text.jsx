import React from 'react';
import {FaUser, FaPlus, FaPencil, FaClose} from 'react-icons/lib/fa/';

class UnitFormText extends React.Component {
  constructor(props){
    super(props);
    this.autocomplete = this.autocomplete.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.showComponent = this.showComponent.bind(this);
    this.editComponent = this.editComponent.bind(this);
    this.deleteProp = this.deleteProp.bind(this);
    this.selectAutoresult = this.selectAutoresult.bind(this);
    this.state = {[props.profileInfo.propName]: props.profileInfo.value,
                  currentUserId: props.currentUserProfile.id,
                  editMode: false,
                  autocompleteOptions: [],
                  showauto: false};

  }

handleChange(e){
  e.preventDefault();
  const {propName} = this.props.profileInfo;
  this.setState({[propName]: e.currentTarget.value});
}

autocomplete(){
  let input = this.state[this.props.profileInfo.propName];
  if (input.length > 2){
    $.ajax({
      url:`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&type=(cities)&key=${window.places_key}`
    }).then(res=>{console.log(res);
      this.setState({autocompleteOptions: res.predictions},()=>{
        this.setState({showauto: true});
      });
    });
  }
}

handleSubmit(propName){
  return (e)=> {
    const userId = this.state.currentUserId;
    const value = this.state[propName];
    this.state.editMode = false;
    this.props.updateProp({[propName]: this.state[propName]}, userId);
  };
}
toggleEditMode(e){
  e.preventDefault();
  const editMode = this.state.editMode;
  this.setState({editMode: !editMode});
}

autoresults(){
  return this.state.showauto ?
  (<ul id="autocomplete">
    {this.state.autocompleteOptions.map((option, idx)=>(
      <li key={idx + "autocomplete"} onClick={this.selectAutoresult}> {option.description} </li>
    ))}
  </ul>) : ""
}

deleteProp(e){
  e.stopPropagation();
  const {propName} = this.props.profileInfo;
  const userId = this.state.currentUserId;
  this.state.editMode = false;
  this.state[propName] = "";
  this.props.updateProp({[propName]: ""}, this.state.currentUserId);
}

selectAutoresult(e) {
  const {propName} = this.props.profileInfo;
  this.setState({[propName]: e.currentTarget.innerText, showauto: false });
}

showComponent(value, instruction, inputLabel){
  return value === "" ?
  (<div onClick={this.toggleEditMode} className="imgPropContent addtext">
    <FaPlus/>
    <a> {instruction} </a>
  </div>) :
  (<div className="imgPropContent showContent">
    <div className= "infoDisplay">
      <div className="valueDisplay">
        <h1 className="valueDisplay text">
          {value}
        </h1>
      </div>
      <div onClick={this.toggleEditMode} className="editDisplay">
        <a>
          <FaPencil/>
          Edit
        </a>
        <div onClick={this.deleteProp} className= "deletePropButton">
          <FaClose/>
        </div>
      </div>

    </div>
  </div>)
}

editComponent(inputLabel, value, propName){
  return (
  <form className="propForm">
    <div className="entry text">
      <h3> {inputLabel} </h3>
      <div>
        <textarea onChange={this.handleChange} type="text" placeholder= {value} value={this.state[propName]} />
        {this.autoresults()}
      </div>
    </div>
    <div className="formButtons">
      <button onClick={this.handleSubmit(propName)} className="submitForm"> Save Changes </button>
      <button onClick={this.toggleEditMode} className="cancelForm"> Cancel </button>
    </div>
  </form>
  )
}


  render(){
    const {updateProp, instruction, inputLabel, propName, value } = this.props.profileInfo;
    return (
      <div className="imgPropUnit">
        {this.state.editMode ?
          this.editComponent(inputLabel, value, propName) :
          this.showComponent(value, instruction, inputLabel)
        }
      </div>)

  }
}

export default UnitFormText;
