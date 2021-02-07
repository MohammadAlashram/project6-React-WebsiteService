import React from 'react';
 import black from '../../../assets/images/black.jpg';
 import tes1 from '../../../assets/images/tes1.png';
 import tes2 from '../../../assets/images/tes2.png';
 import tes3 from '../../../assets/images/tes3.png';
 import quote from '../../../assets/images/quote.png';



const HomeTes = () => {
    return (

<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img id="black" className="d-block w-100" src={black} alt="First slide"/>
      <div id='carousalItem' className='container'>
          <div className='row justify-content-md-center'>
              <div id='first' className='col-12 col-md-6'>
              <img  id='tesimg' className="d-block w-50" src={tes1} alt="First slide"/>
              </div>
              <div id='test' className='col-12 col-md-6'>
              <h1 >TESTIMONIALS</h1>
              <img src={quote} alt="First slide" />
             <p> “This has been an awesome day at Kalas Sessions!” </p>
             <p>Malala </p>
              </div>
          </div>
      </div>
    </div>
    <div className="carousel-item">
      <img id="black" className="d-block w-100" src={black} alt="Second slide"/>
      <div id='carousalItem' className='container'>
          <div className='row justify-content-md-center'>
              <div id='first' className='col-12 col-md-6'>
              <img id='tesimg' className="d-block w-50  float-left" src={tes2} alt="First slide"/>
              </div>
              <div id='test' className='col-12 col-md-6'>
              <h1 >TESTIMONIALS</h1>
              <img src={quote} alt="First slide" />
             <p>After everything settles, go get all that pent up anger out at Kalas!”</p>
             <p>Balaha </p>
             </div>
          </div>
      </div>
    </div>
    <div className="carousel-item">
      <img id="black" className="d-block w-100" src={black} alt="Third slide"/>
      <div id='carousalItem' className='container'>
          <div className='row justify-content-md-center'>
              <div id='first' className='col-12 col-md-6'>
              <img  id='tesimg' className="d-block w-50" src={tes3} alt="First slide"/>
              </div>
              <div id='test' className='col-12 col-md-6'>
              <h1 >TESTIMONIALS</h1>
              <img src={quote} alt="First slide" />
             <p>“Here to destroy all negativity” </p>
             <p>Shusmo </p>
              </div>
          </div>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    )
}

export default HomeTes;