import React from 'react';
import healthcamp from './images/healthcamp.jpg';
import consult from './images/consult.jpg';
import medathome from './images/medathome.jpg';
import {NavLink} from 'react-router-dom';
const Contbox1=()=>{
	return(
		<>
		<div className="container contbox1">
  <div className="row">
  	<div className=" col-md-4 col-sm-12 col-12  bg-dark text-info" style={{width: "18rem;"}}>
  <img src={medathome} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Medicine at home</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <NavLink to="ordernow" style={{backgroundColor:"white",color:"red"}} className="btn btn-dark">Order now</NavLink>
  </div>
</div>
 	<div className=" col-md-4 col-sm-12 col-12  bg-dark text-info" style={{width: "18rem;"}}>
  <img src={consult} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Doctor's consultation</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <NavLink to="booknow" style={{backgroundColor:"white",color:"red"}} className="btn btn-primary">Book now</NavLink>
  </div>
</div>
 	<div className=" col-md-4 col-sm-12 col-12  bg-dark text-info" style={{width: "18rem;"}}>
  <img src={healthcamp} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Health camp info</h5>
    <p className="card-text" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <NavLink to="findlocation" style={{backgroundColor:"white",color:"red"}} className="btn btn-primary">Find location</NavLink>
  </div>
</div>
  </div>
</div>
		</>)
}
export default Contbox1;