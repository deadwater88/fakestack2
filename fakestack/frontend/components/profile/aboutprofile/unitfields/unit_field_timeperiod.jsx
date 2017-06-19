import React from 'react';

class UnitTimePeriod extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.props.handleChange;
    this.state = {}
  }

  render(){
    let {inputLabel, instruction} = this.props.formInfo
    let currentYear = new Date().getFullYear()
    let years = Array.from(Array(40).keys()).map((idx)=> currentYear + 1 - idx)
    let months = ['December', 'November', 'October', 'September', 'Auguest', 'July', 'June', 'May', 'April', 'March', 'February','January']
    return (

          <div className="entry timeperiod">
            <h3> {inputLabel} </h3>
            <div className="subentry">
              <div id='dateStart' className="date">
                <select id='yearStart' value={'Year:'} onChange={this.handleChange}>
                  <option disabled> Year: </option>
                  {years.map((year, idx)=>{
                    return (<option key={"yearStart" + idx} value={year}> {year} </option>)
                  })}
                </select>
                <select id='monthStart' value={'Month:'} onChange={this.handleChange}>
                  <option disabled> Month: </option>
                  {months.map((month, idx)=>{
                    return (<option key={"monthStart" + idx} value={month}> {month} </option>)
                  })}
                </select>
                   to
              </div>

              <div id='dateEnd' className="date">
                <select id='yearStart' value={'Year:'} onChange={this.handleChange}>
                  <option disabled> Year: </option>
                  {years.map((year, idx)=>{
                    return (<option key={"yearEnd" + idx} value={year}> {year} </option>)
                  })}
                </select>
                <select id='monthEnd' value={'Month:'} onChange={this.handleChange}>
                  <option disabled> Month: </option>
                  {months.map((month, idx)=>{
                    return (<option key={"monthEnd" + idx} value={month}> {month} </option>)
                  })}
                </select>
              </div>
            </div>
          </div>)
  }
}


export default UnitTimePeriod
