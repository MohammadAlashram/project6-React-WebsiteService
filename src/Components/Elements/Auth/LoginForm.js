import React from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "../Button";

const LoginForm = (props) => {
  return (
    <div>
      <Form onSubmit={props.onSubmit} id="login">
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
        <Button text="login" />
      </Form>
    </div>
  );
};

export default LoginForm;
