import React from 'react'
import "../../assets/css/Book.css";


const BookingForm = () => {
    return (
        <div>
         <div className="online_reservation">
  <div className="b_room">
    <div className="booking_room">
      <h4>book a room online</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
    </div>
    <div className="reservation">
      <ul>
        <li className="span1_of_1">
          <h5>type of room:</h5>
          {/*--------start section_room---------*/}
          <div className="section_room">
            <select
              id="country"
              onchange="change_country(this.value)"
              className="frm-field required"
            >
              <option value="null">Select a type of room</option>
              <option value="null">Suite room</option>
              <option value="AX">Single room</option>
              <option value="AX">Double room</option>
            </select>
          </div>
        </li>
        <li className="span1_of_1 left">
          <h5>check-in-date:</h5>
          <div className="book_date">
            <form>
              <input
                className="date"
                id="datepicker"
                type="text"
                defaultValue="DD/MM/YY"
                onfocus="this.value = '';"
                onblur="if (this.value == '') {this.value = 'DD/MM/YY';}"
              />
            </form>
          </div>
        </li>
        <li className="span1_of_1 left">
          <h5>check-out-date:</h5>
          <div className="book_date">
            <form>
              <input
                className="date"
                id="datepicker1"
                type="text"
                defaultValue="DD/MM/YY"
                onfocus="this.value = '';"
                onblur="if (this.value == '') {this.value = 'DD/MM/YY';}"
              />
            </form>
          </div>
        </li>
        <li className="span1_of_2 left">
          <h5>Adults:</h5>
          {/*--------start section_room---------*/}
          <div className="section_room">
            <select
              id="country"
              onchange="change_country(this.value)"
              className="frm-field required"
            >
              <option value="null">1</option>
              <option value="null">2</option>
              <option value="AX">3</option>
              <option value="AX">4</option>
            </select>
          </div>
        </li>
        <li className="span1_of_3">
          <div className="date_btn">
            <form>
              <input type="submit" defaultValue="book now" />
            </form>
          </div>
        </li>
        <div className="clear" />
      </ul>
    </div>
    <div className="clear" />
  </div>
</div>
   
        </div>
    )
}

export default BookingForm
