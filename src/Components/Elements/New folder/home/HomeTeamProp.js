import React from 'react';
import '../../../assets/css/home.css';






const HomeTeamProp = (props) => {
    return (

<div id="" className="card">

    <img className="card-img-top" src={props.img} alt="Card image cap"/>
 

    <div id='cardser' className="card-body">
  
      <h3 id='titleser' className="card-title" style={{paddingTop:'4rem'}}>{props.name} </h3>
  
    </div>
  
  </div>
  
  )
}

export default HomeTeamProp;
