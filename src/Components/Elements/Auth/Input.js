import React from "react";
import "../../../assets/css/style.css";
const Input = (props) => {
  const errors = (props, name) => {
    if (props.errors[name]) {
      return `*${props.errors[name]}`;
    }
  };
  const values = (props, name) => {
    if (props.name == "password") {
      return "";
    }
    if (props.value[name]) {
      return props.value[name];
    }
  };
  return (
    <div className="col-md-10 col-lg-10 mb-2 mr-auto">
      <div className="error d-flex justify-content-between">
        <label className="text-left" for="validationCustom02 ">
          {props.label}
        </label>
        <p className="text-danger ">{errors(props, props.name)}</p>
      </div>
      <input
        name={props.name}
        className="form-control border-danger"
        type={props.type}
        placeholder={props.label}
        value={
          typeof props.value === "object" ? values(props, props.name) : null
        }
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
