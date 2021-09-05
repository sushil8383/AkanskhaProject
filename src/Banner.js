import React from 'react';
import health1 from './images/health1.jpg';
import health2 from './images/health2.jpg';
import health3 from './images/health3.jpg';
import health4 from './images/health4.jpg';
import health5 from './images/health5.jpg';

const Banner=()=>{
	return(
		<>
		<div className="container my-5">
		<div id="demo"  className=" banner  carousel slide" data-ride="carousel">
  
  <div  className="carousel-inner bannerdiv">
    <div className="carousel-item active">
      <img  src={health5} alt="Los Angeles" width="100%" height="400rem" />
      
    </div>
    <div className="carousel-item">
      <img  src={health2} alt="Chicago" width="100%" height="400rem" />
       
    </div>
    <div className="carousel-item">
      <img  src={health3} alt="New York" width="100%" height="400rem" />
      
    </div>
    <div className="carousel-item">
      <img  src={health4} alt="New York" width="100%" height="400rem" />
      
    </div>
    
    
  </div>
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon " ></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon" ></span>
  </a>
</div>
</div>


		</>
		)
}
export default Banner;