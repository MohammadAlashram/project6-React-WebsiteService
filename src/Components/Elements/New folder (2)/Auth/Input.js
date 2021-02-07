import React from "react";
import "../../../assets/css/style.css";
const Input = (props) => {
  const errors = (props, name) => {
    if (props.errors[name]) {
      return `*${props.errors[name]}`;
    }
    console.log(props.errors);
  };
  return (
    <div className="col-md-6 col-lg-4 mb-2 mx-auto">
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
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
