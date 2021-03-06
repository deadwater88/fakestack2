import React from 'react';
import {FaUser, FaPlus, FaPencil, FaClose} from 'react-icons/lib/fa/';

class UnitFormText extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.showComponent = this.showComponent.bind(this);
    this.editComponent = this.editComponent.bind(this);
    this.deleteProp = this.deleteProp.bind(this);
    this.state = {[props.profileInfo.propName]: props.profileInfo.value,
                  viewedUserId: props.viewedUserProfile.id,
                  editMode: false,
                  autocompleteOptions: [],
                  showauto: false,
                  editCheck: this.props.profileInfo.editCheck};

  }

handleChange(e){
  e.preventDefault();
  const {propName} = this.props.profileInfo;
  this.setState({[propName]: e.currentTarget.value});
}

handleSubmit(propName){
  return (e)=> {
    e.preventDefault();
    const userId = this.state.viewedUserId;
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
  </ul>) : "";
}

deleteProp(e){
  e.stopPropagation();
  const {propName} = this.props.profileInfo;
  this.state.editMode = false;
  this.state[propName] = "";
  this.props.updateProp({[propName]: ""}, this.state.viewedUserId);
}

selectAutoresult(e) {
  const {propName} = this.props.profileInfo;
  this.setState({[propName]: e.currentTarget.innerText, showauto: false });
}

showComponent(value, instruction, inputLabel){
  return value === "" ?
  (<div onClick={this.toggleEditMode} className="imgPropContent addtext" style={this.state.editCheck}>
    <FaPlus/>
    <a> {instruction} </a>
  </div>) :
  (<div className="imgPropContent showContent">
    <div className= "infoDisplay">
      <div className="valueDisplay">
        <h4 className="valueDisplay text">
          {value}
        </h4>
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
  </div>);
}

editComponent(inputLabel, value, propName, instruction){
  return (
  <form className="propForm">
    <div className="entry text">
      <h3> {inputLabel} </h3>
      <div>
        <textarea onChange={this.handleChange} type="text" placeholder= {instruction} value={this.state[propName]} />
      </div>
    </div>
    <div className="formButtons">
      <button onClick={this.handleSubmit(propName)} className="submitForm"> Save Changes </button>
      <button onClick={this.toggleEditMode} className="cancelForm"> Cancel </button>
    </div>
  </form>
);
}


  render(){
    const {updateProp, instruction, inputLabel, propName, value } = this.props.profileInfo;
    return (
      <div className="imgPropUnit">
        {this.state.editMode ?
          this.editComponent(inputLabel, value, propName, instruction) :
          this.showComponent(value, instruction, inputLabel)
        }
      </div>);

  }
}

export default UnitFormText;
