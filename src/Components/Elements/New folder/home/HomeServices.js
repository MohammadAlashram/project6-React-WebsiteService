import React from 'react';
import '../../../assets/css/home.css';
import img1 from '../../../assets/images/service1.jpg';
import img2 from '../../../assets/images/service2.png';
import img3 from '../../../assets/images/service3.jpg';




const HomeServices = () => {
    return (
<div>
<div className="card-deck">
  <div className="card">

    <img className="card-img-top" src={img1} alt="Card image cap"/>
 

    <div id='cardser' className="card-body">
  
      <h3 id='titleser' className="card-title">Rage Room</h3>
      <a id="button" href="#" style={{backgroundColor:'#CC3333' , color:'#fff'}} class="btn btn btn active" role="button" aria-pressed="true" >Book it</a>
  
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={img2} alt="Card image cap"/>
    <div id='cardser' className="card-body">
      <h3 id='titleser' className="card-title">Rage Painting</h3>
      <a id="button" href="#" style={{backgroundColor:'#CC3333' , color:'#fff'}} class="btn btn btn active" role="button" aria-pressed="true" >Book it</a>

    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={img3} alt="Card image cap"/>
    <div id='cardser' className="card-body">
      <h3 id='titleser' className="card-title">Smash Party</h3>
      <a id="button" href="#" style={{backgroundColor:'#CC3333', color:'#fff'}} class="btn btn btn active" role="button" aria-pressed="true" >Book it</a>

    </div>
  </div>
</div>

</div>


    )
}

export default HomeServices;
