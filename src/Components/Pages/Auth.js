import React, { Component } from "react";
import RegisterForm from "../Elements/Auth/RegisterForm";
import LoginForm from "../Elements/Auth/LoginForm";
import Swal from "sweetalert2";
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: "login",
      registerForm: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
      loginForm: {
        email: "",
        password: "",
      },
      errors: { email: "", password: "" },
    };
  }
  updateRegisterState = (e) => {
    //Taking input name
    let input = e.target.name;
    //Storing state.form in a variable
    let newForm = { ...this.state.registerForm };
    // Updaiting new state with value from input
    newForm[input] = e.target.value;
    this.setState({ registerForm: newForm });

    //Trigger validation function
    this.registerValidation(e);
  };
  registerValidation = (e) => {
    //Validating Form
    if (e.target.value == "") {
      const errors = { ...this.state.errors };
      errors[e.target.name] = "This field is required";
      this.setState({ errors: errors });
    } else if (e.target.name == "firstname" || e.target.name == "lastname") {
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
    } else if (e.target.name == "password") {
      if (e.target.value.length < 8) {
        const errors = { ...this.state.errors };
        errors[e.target.name] = "Password must contain at leat 8 charachters";
        this.setState({ errors: errors });
      } else {
        const errors = { ...this.state.errors };
        delete errors[e.target.name];
        this.setState({ errors: errors });
      }
    }
  };

  registerSubmit = (e) => {
    //Prevent reload on submit
    e.preventDefault();
    //Checking if fields are not empty
    this.requiredError();
    //Storing form values in object
    let users = [];
    let form = { ...this.state.registerForm };
    let storedUsers;
    //Checking if all data is validated
    if (JSON.stringify(this.state.errors) == "{}") {
      //getting users from Local Storage and setting it if not set
      if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify(users));
      }
      storedUsers = JSON.parse(localStorage.getItem("users"));
      //Checking if email is unique
      let emailExists;
      storedUsers.map((user) => {
        if (form.email == user.email) {
          Swal.fire("Email is already registered");
          emailExists = true;
        }
      });
      if (!emailExists) {
        // Storing form data in LocalStorage
        const newUsers = [...storedUsers, form];
        // newUsers.push(user);
        localStorage.setItem("users", JSON.stringify(newUsers));
        //Reseting form after submition
        document.getElementById("register").reset();
        Swal.fire("Success");
      }
    }
  };
  updateLoginState = (e) => {
    //Taking input name
    let input = e.target.name;
    //Storing state.form in a variable
    let newForm = { ...this.state.loginForm };
    // Updaiting new state with value from input
    newForm[input] = e.target.value;
    this.setState({ loginForm: newForm });
    //Validation
    //using same validation as register
    this.registerValidation(e);
  };
  loginSubmit = (e) => {
    //Prevent reload on submit
    e.preventDefault();
    //Checking if fields are not empty
    this.requiredError();
    //Storing form values in object
    let user = { ...this.state.loginForm };
    //Checking if all data is validated
    if (JSON.stringify(this.state.errors) == "{}") {
      //getting users from Local Storage and setting it if not set
      if (!localStorage.getItem("users")) {
        Swal.fire("incorrect email or password");
      } else {
        let loginFailed;
        let form = { ...this.state.loginForm };
        let storedUsers = JSON.parse(localStorage.getItem("users"));
        storedUsers.map((user) => {
          if (form.email == user.email && form.password == user.password) {
            sessionStorage.setItem("loggedUser", JSON.stringify(user));
            Swal.fire("Success");
          } else {
            loginFailed = true;
          }
        });
        if (!loginFailed) {
          Swal.fire("incorrect email or password");
        }
      }
    }
  };
  //I am using component did update to check if the form changed so that i clear the errors
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.activeForm !== this.state.activeForm) {
  //     this.setState({
  //       errors: {},
  //     });
  //   }
  //   console.log("component did update");
  // }
  changeForm = () => {
    if (this.state.activeForm == "register") {
      this.setState({
        activeForm: "login",
        errors: { email: "", password: "" },
      });
    } else {
      this.setState({ activeForm: "register" });
      this.setState({
        errors: { email: "", password: "" },
      });
    }

    console.log("change form and set state");
  };
  requiredError = (e) => {
    if (e) {
      if (e.target.value == "") {
        const errors = { ...this.state.errors };
        errors[e.target.name] = "This field is required";
        this.setState({ errors: errors });
      }
    } else {
      const errors = { ...this.state.errors };
      let firstname;
      let lastname;
      let email;
      let password;
      if (document.getElementsByName("firstname")[0]) {
        firstname = document.getElementsByName("firstname")[0].value;
      }
      if (document.getElementsByName("lastname")[0]) {
        lastname = document.getElementsByName("lastname")[0].value;
      }
      if (document.getElementsByName("email")[0]) {
        email = document.getElementsByName("email")[0].value;
      }
      if ((password = document.getElementsByName("password"))) {
        password = document.getElementsByName("password")[0].value;
      }
      if (firstname == "") {
        errors.firstname = "This field is required";
      }
      if (lastname == "") {
        errors.lastname = "This field is required";
      }
      if (email == "") {
        errors.email = "This field is required";
      }
      if (password == "") {
        errors.password = "This field is required";
      }
      this.setState({ errors: errors });
    }
  };
  render() {
    console.log("render");
    let activeForm;
    if (this.state.activeForm == "register") {
      activeForm = (
        <RegisterForm
          onSubmit={this.registerSubmit}
          onChange={this.updateRegisterState}
          onBlur={this.requiredError}
          errors={this.state.errors}
        />
      );
    } else {
      activeForm = (
        <LoginForm
          onSubmit={this.loginSubmit}
          onChange={this.updateLoginState}
          onBlur={this.requiredError}
          errors={this.state.errors}
        />
      );
    }
    return (
      <div>
        <button onClick={this.changeForm}>change</button>
        {activeForm}
      </div>
    );
  }
}

export default Auth;
