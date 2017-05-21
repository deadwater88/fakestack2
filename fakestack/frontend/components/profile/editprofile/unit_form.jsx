import React from 'react';
import {FaUser, FaPlus, FaPencil, FaClose} from 'react-icons/lib/fa/';

class UnitForm extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.showComponent = this.showComponent.bind(this);
    this.editComponent = this.editComponent.bind(this);
    this.deleteProp = this.deleteProp.bind(this);
    this.state = {[props.profileInfo.propName]: props.profileInfo.value,
                  currentUserId: props.currentUserProfile.id,
                  editMode: false}

  }

handleChange(e){
  e.preventDefault();
  const {propName} = this.props.profileInfo
  this.setState({[propName]: e.currentTarget.value}, ()=> console.log(this.state))
}

handleSubmit(propName){

  return (e)=> {
    const {propName} = this.props.profileInfo
    const userId = this.state.currentUserId
    const value = this.state[propName]
    this.state.editMode = false
    this.props.updateProp({[propName]: this.state[propName]}, userId)
  }
}
toggleEditMode(e){
  e.preventDefault();
  const editMode = this.state.editMode
  this.setState({editMode: !editMode})
}


deleteProp(e){
  e.stopPropagation();
  const {propName} = this.props.profileInfo
  const userId = this.state.currentUserId
  this.state.editMode = false
  this.props.updateProp({[propName]: ""}, this.state.currentUserId)

}

showComponent(value, instruction, inputLabel){
  return value === "" ?
  (<div onClick={this.toggleEditMode} className="imgPropContent addContent">
    <FaPlus/>
    <a> {instruction} </a>
  </div>) :
  (<div className="imgPropContent showContent">
    <FaPlus/>
    <div className= "infoDisplay">
      <div className="valueDisplay">
        <h1 className="valueDisplay">
          {value}
        </h1>
        <h4>
          {inputLabel}
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
  </div>)
}

editComponent(inputLabel, value, propName){
  return (
  <form className="propForm">
    <div className="entry">
      <h3> {inputLabel} </h3>
      <div>
        <input onChange={this.handleChange} type="text" placeholder= {value} value={this.state.propsName} />
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

export default UnitForm;
