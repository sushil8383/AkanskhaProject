import React from 'react';
const Feature=()=>{
  return(
    <>
    <div className="container">
   
<div className="container mx-auto">
 <div className="row">

<ul className="nav nav-tabs  " id="myTab" role="tablist">
<div className="col-md-4 col-sm-12 col-12">
  <li className="nav-item " role="presentation">
    <button style={{backgroundColor:"transparent",opacity:"0.8",border:"NONE",outline:"NONE",color:"white"}}  className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Features</button>
  </li>
  </div>
  <div className="col-md-4 col-sm-12 col-12">
  <li className="nav-item " role="presentation">
    <button style={{backgroundColor:"transparent",opacity:"0.8",border:"NONE",outline:"NONE",color:"white"}} className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Benefits</button>
  </li>
  </div>
  <div className="col-md-4 col-sm-12 col-12">
  <li className="nav-item " role="presentation">
    <button style={{backgroundColor:"transparent",opacity:"0.8",border:"NONE",outline:"NONE",color:"white"}} className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Why best</button>
  </li>
  </div>
</ul>
</div>
</div>
<div className="tab-content text-info" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  <h1 className="text-center">Features</h1>

  <p>1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
  
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <h1 className="text-center">Benefits</h1>
  <p>2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
  
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
  <h1 className="text-center">Why best</h1>
  <p>3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
</div>
</div>
</>
)
}
export default Feature;