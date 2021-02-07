import React from "react";

const Form = (props) => {
  return (
    <form id={props.id} onSubmit={props.onSubmit}>
      <div className="container col-12">
        <h3 className="form-title text-center">{props.title}</h3>
        <div className="container"> {props.children}</div>
      </div>
    </form>
  );
};

export default Form;
