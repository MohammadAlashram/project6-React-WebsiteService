import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import Book from '../Pages/Book';
import '../../assets/css/style.css'


export default class DatePikerInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day }); 
    this.props.getDate(day)
  }
  // componentDidUpdate(){
  //   this.props.getDate(this.state.selectedDay)
  // }
  render() {
    // console.log(this.state.selectedDay);
    const { selectedDay } = this.state;
    return (  
      <div className="col-md-6 col-lg-4 mb-2 mx-auto">   

        {/* {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
        {!selectedDay && <p>Choose a day</p>} */}
        {/* <label className="text-left" for="validationCustom02 ">
          {this.props.label}                                           
        </label> */}
        <div className="error d-flex justify-content-between">
        <label className="text-left" for="validationCustom02 ">
          {this.props.label}
        </label>
       
      </div>
       
        <DayPickerInput 
        // name={props.name}
        onDayChange={this.handleDayChange} 
        />
       
      </div>
    );
  }
}
// submit = (num)=>{
// alert(num)
// }
// submit(2)