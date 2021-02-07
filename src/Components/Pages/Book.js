import React, { Component } from "react";
import Swal from "sweetalert2";
import BookForm from "../Elements/BookForm";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookForm: {
        service: "",
        phonenumber: "",
        datepiker: "",
        time: "",
        email: "",
      },
      selectedDay: undefined,
      errors: {
        phonenumber: "",
      },
      triggerErrors: {},
    };
  }
  // componentDidUpdate() {
  //   console.log(this.props.selectedDay);
  // }
  updateBookState = (e) => {
    let input = e.target.name;
    console.log(e.target.value);
    let newForm = { ...this.state.bookForm };
    newForm[input] = e.target.value;
    this.setState({ bookForm: newForm });

    if (e.target.name == "firstname" || e.target.name == "lastname") {
      if (e.target.value.length < 3) {
        const errors = { ...this.state.errors };
        errors[e.target.name] = "Must contain at least 3 characters";
        this.setState({ errors: errors });
      } else if (e.target.value.length > 30) {
        const errors = { ...this.state.errors };
        errors[e.target.name] = "Must be less than 30 characters";
        this.setState({ errors: errors });
      } else {
        const errors = { ...this.state.errors };
        delete errors[e.target.name];
        this.setState({ errors: errors });
      }
    } else if (e.target.name == "email") {
      if (!e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        const errors = { ...this.state.errors };
        errors[e.target.name] = "Please enter a valid email address";
        this.setState({ errors: errors });
      } else {
        const errors = { ...this.state.errors };
        delete errors[e.target.name];
        this.setState({ errors: errors });
      }
    } else if (e.target.name == "phonenumber") {
      if (e.target.value.length < 8) {
        const errors = { ...this.state.errors };
        errors[e.target.name] = "The Phonenumber should contain 10 Characters";
        this.setState({ errors: errors });
      } else {
        const errors = { ...this.state.errors };
        delete errors[e.target.name];
        this.setState({ errors: errors });
      }
    }
  };

  triggerErrors = (e) => {
    if (e.target.value == "") {
      const errors = { ...this.state.errors };
      errors[e.target.name] = "This field is required";
      this.setState({ errors: errors });
    }
    const errors = { ...this.state.errors };
    this.setState({ triggerErrors: errors });
  };

  bookSubmit = (e) => {
    e.preventDefault();
    //this.setState({bookForm.datepiker: this.props.selectedDay.toLocaleDateString() })
    let books = [];
    const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
    const serviceName = document.getElementById("service-name").innerHTML;
    let book = { ...this.state.bookForm };
    book.email = loggedUser.email;
    book.service = serviceName;
    book.datepiker = this.state.selectedDay.toLocaleDateString();
    let storedBooks;
    if (JSON.stringify(this.state.triggerErrors) == "{}") {
      if (!localStorage.getItem("books")) {
        localStorage.setItem("books", JSON.stringify(books));
      }
      storedBooks = JSON.parse(localStorage.getItem("books"));
      const newBooks = [...storedBooks];
      newBooks.push(book);
      localStorage.setItem("books", JSON.stringify(newBooks));
      document.getElementById("bookForm").reset();
      Swal.fire("Service Booked");
    }
  };
  getDate = (date) => {
    this.setState({ selectedDay: date });
  };
  render() {
    return (
      <div>
        <BookForm
          onSubmit={this.bookSubmit}
          onChange={this.updateBookState}
          onBlur={this.triggerErrors}
          errors={this.state.triggerErrors}
          getDate={this.getDate}
        />
      </div>
    );
  }
}

export default Book;
