import React from 'react'
import '../../assets/css/Header.css'
// import Angry from '../img/Angry.png';
import Angry from '../../assets/images/Angry.png';
const Header = () => {
    return (
      <div>
      <div className="topnav" id="myTopnav">
      <a href="#Login|Register">Login |Register</a> 
      <a href="#Services">Services</a>
      <a href="javascript:void(0);" style={{fontSize: '15px'}} className="icon" onclick="myFunction()">☰</a>
      </div>
      <div>
      <a href="#home" className="logo"><img  src={Angry}  alt="logoangry"/></a>
      </div>
     
       </div>
  
  
    );
}
export default Header

