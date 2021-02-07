import React from 'react';
 import panda from '../../../assets/images/panda.jpg';



const HomeCTA = () => {
    return (


<div id='CTA' className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img
        src={panda}
        alt="..."
        className="img-fluid"
      />
    </div>
    <div className="col-md-8">
      <div  className="card-body">
    
        <p id='CTAtext' className="card-text">
        IT IS SIMPLE! <br />
        BOOK, SHOW UP, AND
        BRING OUT THE BEAST!
        </p>
        <a id="buttonCTA" href="#" style={{backgroundColor:'#CC3333', color:'#fff'}} class="btn btn btn-lg active" role="button" aria-pressed="true" >Book Now</a>

      </div>
    </div>
  </div>
</div>
    
    )
}

export default HomeCTA;