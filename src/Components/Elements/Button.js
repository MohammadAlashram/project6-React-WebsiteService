import React from "react";

const Button = (props) => {
  return (
    <button className="btn btn-danger d-flex mx-auto" type="submit" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
