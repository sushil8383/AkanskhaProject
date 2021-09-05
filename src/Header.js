import React from 'react';
import logo from './images/logo1.png';
import {NavLink} from 'react-router-dom';

const Header=()=>{
  return(
    <>

    <div className="container-fluid" >
   <nav className="navbar navbar-light">
  <div className="container">
  <NavLink to="/"><span className="logo">
  <span style={{fontSize:"70px",color:"white",fontFamily:"italic",textShadow:"5px 5px 2px yellow"}}>A</span>KAN<span style={{fontSize:"40px",color:"white",fontFamily:"italic",textShadow:"5px 5px 2px yellow"}}>K</span>SHA</span></NavLink>
  
    
    <form className="d-flex">
      <input className="searchbox p-2" type="search" placeholder="Delivery pin | Search medicine,camps" aria-label="Search"/>
      
    </form>
  </div>
</nav>
    </div>
    </>
    )
}
export default Header;