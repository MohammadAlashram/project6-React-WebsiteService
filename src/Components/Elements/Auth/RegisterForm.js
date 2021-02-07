import React from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "../Button";

const RegisterForm = (props) => {
  return (
    <div>
      <div className="bg-img">
        <Form onSubmit={props.onSubmit} id="register" className="container">
          <Input
            name="firstname"
            label="First Name"
            onChange={props.onChange}
            onBlur={props.onBlur}
            errors={props.errors}
          />
          <Input
            name="lastname"
            label="Last Name"
            onChange={props.onChange}
            onBlur={props.onBlur}
            errors={props.errors}
          />
          <Input
            name="email"
            label="Email"
            onChange={props.onChange}
            onBlur={props.onBlur}
            errors={props.errors}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            onChange={props.onChange}
            onBlur={props.onBlur}
            errors={props.errors}
          />
          <Button text="Register" />
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
