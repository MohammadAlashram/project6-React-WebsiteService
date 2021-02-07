import React, { Component } from "react";
import Swal from "sweetalert2";
import Form from "./Auth/Form";
import Input from "./Auth/Input";
import Button from "./Button";
import DatePikerInput from "./DatePikerInput";
import Select from "./Select";

class BookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  displayButton = () => {
    if (sessionStorage.getItem("loggedUser")) {
      const doesShow = this.state.show;
      this.setState({ show: !doesShow });
    } else {
      Swal.fire("Yoy must be logged in to book a service");
    }
  };

  render() {
    let Booking11 = null;

    if (this.state.show) {
      Booking11 = (
        <Form onSubmit={this.props.onSubmit} id="bookForm">
          <DatePikerInput
            // name="datepiker"
            label="Date"
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
            getDate={this.props.getDate}
            // onDayChange={props.onDayChange}
          />
          <Select label="Time" onChange={this.props.onChange} />
          <Input
            name="phonenumber"
            label="Phone Number"
            type="phone"
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
            errors={this.props.errors}
          />

          <Button text="Book" />
        </Form>
      );
    }

    return (
      <div>
        <Button text="Book Now" onClick={this.displayButton} />
        {Booking11}
      </div>
    );
  }
}

export default BookForm;
