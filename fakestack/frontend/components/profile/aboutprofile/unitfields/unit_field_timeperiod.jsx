import React from 'react';

class UnitTimePeriod extends React.Component {
  constructor(props){
    super(props);
    this.handleChangeStart = this.props.formInfo.handleChangeStart;
    this.handleChangeEnd = this.props.formInfo.handleChangeEnd;
  }

  render(){
    let {inputLabel, value} = this.props.formInfo;
    let currentYear = new Date().getFullYear();
    let years = Array.from(Array(40).keys()).map((idx)=> currentYear + 1 - idx);
    let months = ['December', 'November', 'October', 'September', 'August', 'July', 'June', 'May', 'April', 'March', 'February','January'];
    let startyear = value.start_date.year == "" ? "Year:" : value.start_date.year;
    let startmonth = value.start_date.month == "" ? "Month:" : value.start_date.month;
    let endyear = value.end_date.year == "" ? "Year:" : value.end_date.year;
    let endmonth = value.end_date.month == "" ? "Month:" : value.end_date.month;
    return (

          <div className="entry timeperiod">
            <h3> {inputLabel} </h3>
            <div className="subentry">
              <div id='dateStart' className="date">
                <select name='year' id='yearStart' value={startyear} onChange={this.handleChangeStart}>
                  <option> Year: </option>
                  {years.map((year, idx)=>{
                    return (<option key={"yearStart" + idx} value={year}> {year} </option>);
                  })}
                </select>
                <select name='month' id='monthStart' value={startmonth} onChange={this.handleChangeStart}>
                  <option> Month: </option>
                  {months.map((month, idx)=>{
                    return (<option key={"monthStart" + idx} value={month}> {month} </option>);
                  })}
                </select>
                   to
              </div>

              <div id='dateEnd' className="date">
                <select name='year' id='yearStart' value={endyear} onChange={this.handleChangeEnd}>
                  <option> Year: </option>
                  {years.map((year, idx)=>{
                    return (<option key={"yearEnd" + idx} value={year}> {year} </option>);
                  })}
                </select>
                <select name='month' id='monthEnd' value={endmonth} onChange={this.handleChangeEnd}>
                  <option> Month: </option>
                  {months.map((month, idx)=>{
                    return (<option key={"monthEnd" + idx} value={month}> {month} </option>);
                  })}
                </select>
              </div>
            </div>
          </div>)
  }
}


export default UnitTimePeriod
