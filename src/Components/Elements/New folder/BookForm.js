import React, { Component } from "react";
import Form from "./Auth/Form";
import Input from "./Auth/Input";
import Button from "./Button";
import DatePikerInput from "./DatePikerInput";
import Select from "./Select"


class BookForm extends Component  {

  constructor(){
    super()
 
    this.state = {
    show: false,
    };
  }

  displayButton = () => {
    const doesShow = this.state.show;
    this.setState({ show: !doesShow });
  };


  render(){
    let Booking11 = null;

    if (this.state.show) {

        Booking11 = ( 
        
        <Form onSubmit={this.props.onSubmit} id="bookForm" >
         <DatePikerInput
        // name="datepiker"
        label="Date"
        onChange={this.props.onChange}
        onBlur={this.props.onBlur}
        getDate={this.props.getDate}
        // onDayChange={props.onDayChange}
         />
          <Select
        label="Time" />
        <Input
          name="phonenumber"
          label="Phone Number"
          type="phone"
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
          errors={this.props.errors}
        />       
            
        <Button text="Book" />
        
        </Form>) 
    }

    return (
      <div>
        <Button
          text="Book Now blalalalal"
          onClick={this.displayButton}
        />
        {Booking11}
         
         


    </div>
     )
    }
  }


export default BookForm;
    