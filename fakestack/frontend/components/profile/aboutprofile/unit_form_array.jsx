import React from 'react';
import {FaUser, FaPlus, FaPencil, FaClose} from 'react-icons/lib/fa/';

class UnitFormArray extends React.Component {
  constructor(props){
    super(props);
    this.autocomplete = this.autocomplete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.deleteProp = this.deleteProp.bind(this);
    this.selectAutoresult = this.selectAutoresult.bind(this);
    this.state = {[props.profileInfo.propName]: props.profileInfo.values,
                  viewedUserId: props.viewedUserProfile.id,
                  editMode: Array(props.profileInfo.values.length).fill(false),
                  autocompleteOptions: [],
                  showauto: false,
                  editCheck: this.props.profileInfo.editCheck};
  }

handleChange(idx1){
  return (e) => {
  e.preventDefault();
  const {propName} = this.props.profileInfo;
  let newState = this.state[propName];
      newState = newState.concat([]);
    newState[idx1] = e.currentTarget.value;
  this.setState({[propName]: newState});};
}

autocomplete(){
  let input = this.state[this.props.profileInfo.propName];
  if (input.length > 2){
    $.ajax({
      url:`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&type=(cities)&key=${window.places_key}`
    }).then(res=>{
      this.setState({autocompleteOptions: res.predictions},()=>{
        this.setState({showauto: true});
      });
    });
  }
}

handleSubmit(propName, idx1){
  return (e)=> {
    const userId = this.state.viewedUserId;
    let value = this.state[propName].concat([]);
    value.pop();
    value[idx1] = this.state[propName][idx1];
    this.state.editMode[idx1] = false;
    this.props.updateProp({[propName]: value}, userId);
  };
}
toggleEditMode(idx1){
  return (e)=> {
  e.preventDefault();
  let editMode = [].concat(this.state.editMode);
  editMode[idx1] = !editMode[idx1];
  this.setState({editMode: editMode});
};
}

autoresults(){
  return this.state.showauto ?
  (<ul id="autocomplete">
    {this.state.autocompleteOptions.map((option, idx)=>(
      <li key={idx + "autocomplete"} onClick={this.selectAutoresult}> {option.description} </li>
    ))}
  </ul>) : "";
}

deleteProp(idx1){
  return (e)=> {
  e.stopPropagation();
  const {propName} = this.props.profileInfo;
  this.state.editMode[idx1] = false;
  let oldState = this.state[propName];
  const newState = oldState.slice(0,idx1).concat(oldState.slice(idx1 + 1));
  this.state[propName] = newState;
  this.props.updateProp({[propName]: newState}, this.state.viewedUserId);
};
}

selectAutoresult(e) {
  const {propName} = this.props.profileInfo;
  this.setState({[propName]: e.currentTarget.innerText, showauto: false });
}

showValues(value, idx1){
  return (
  <div key={"value" + idx1} className="imgPropContent showContent">
    <div className= "infoDisplay">
      <div className="valueDisplay">
        <h1 className="valueDisplay text">
          {value}
        </h1>
      </div>
      <div onClick={this.toggleEditMode(idx1)} className="editDisplay" style={this.state.editCheck}>
        <a>
          <FaPencil/>
          Edit
        </a>
        <div onClick={this.deleteProp(idx1)} className= "deletePropButton">
          <FaClose/>
        </div>
      </div>

    </div>
  </div>);
}

showInstruction(instruction, lastidx) {
  return (<div onClick={this.toggleEditMode(lastidx)} className="imgPropContent addtext" style={this.state.editCheck}>
    <FaPlus/>
    <a> {instruction} </a>
  </div>);
}


editComponent(inputLabel, value, propName, idx1){
  return (
  <form className="propForm">
    <ul className="entryTextContainer">
      <div className="entry text">
        <h3> {inputLabel} </h3>
        <div>
          <input onChange={this.handleChange(idx1)} type="text" placeholder= {value} value={this.state[propName][idx1]||""} />
        </div>
      </div>
    </ul>
    <div className="formButtons">
      <button onClick={this.handleSubmit(propName,idx1)} className="submitForm"> Save Changes </button>
      <button onClick={this.toggleEditMode(idx1)} className="cancelForm"> Cancel </button>
    </div>
  </form>
);
}


  render(){
    const {updateProp, instruction, inputLabel, propName, values } = this.props.profileInfo;
    const lastidx = values.length;
    return (
      <div className="imgPropUnit">
        {values.map((value, idx1)=> {
          return this.state.editMode[idx1] ?
          this.editComponent(inputLabel, value, propName, idx1) :
          this.showValues(value, idx1);
        })}
        { this.state.editMode[lastidx] ? this.editComponent(inputLabel, "", propName, lastidx) :
          this.showInstruction(instruction, lastidx)}
      </div>);

  }
}

export default UnitFormArray;
