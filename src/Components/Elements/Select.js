import React from "react";

const Select = (props) => {
  return (
    <div className="col-md-6 col-lg-4 mb-2 mx-auto">
      <div className="error d-flex justify-content-between">
        <label className="text-left" for="validationCustom02 ">
          {props.label}
        </label>
      </div>
      <select
        className="form-control border-danger"
        onChange={props.onChange}
        name="time"
      >
        <option value="9 AM">9 AM</option>
        <option value="10 AM">10 AM</option>
        <option value="11 AM">11 AM</option>
        <option value="12 PM">12 PM</option>
        <option value="1 PM">1 PM </option>
        <option value="2 PM">2 PM</option>
        <option value="3 PM">3 PM</option>
        <option value="4 PM">4 PM</option>
        <option value="5 PM">5 PM</option>
        <option value="6 PM">6 PM</option>
        <option value="7 PM">7 PM </option>
        <option value="8 PM">8 PM</option>
        <option value="9 PM">9 PM</option>
      </select>
    </div>
  );
};

export default Select;
