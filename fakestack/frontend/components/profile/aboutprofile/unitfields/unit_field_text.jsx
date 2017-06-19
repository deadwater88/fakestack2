
class UnitFieldText extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.props.handleChange;

  }

  render(){
    {inputLabel, instruction} = this.props.formInfo
    return (
      <div className="entry text">
        <h3> {inputLabel} </h3>
        <div>
          <textarea onChange={this.handleChange} type="text" placeholder= {instruction} value={this.state[propName]} />
        </div>
      </div>)
  }
}


export default UnitFieldText
