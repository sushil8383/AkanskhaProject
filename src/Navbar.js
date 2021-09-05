import React,{useState} from 'react';
import medi from './images/medicine.jpg';
import {Link,NavLink} from 'react-router-dom';

const Navbar=()=>{
  const [cart,setcart] = useState(0);
	return(
		<>
		
	<div className="container-fluid my-3">
	<div className="row">
	<div className="col-md-8 col-sm-12 col-12">

    <nav className="navbar navbar-expand-sm  justify-content-center">
  <ul className="navbar-nav">
    <li className="nav-item   ">
      <NavLink to="/knock" className="nav-link " >Knock knock medico</NavLink>
    </li>
    <li className="nav-item ">
      <NavLink to="/health" className="nav-link " >Health camp</NavLink>
    </li>
    <li className="nav-item ">
      <NavLink to="/doctor" className="nav-link ">Doctor’s Consultation</NavLink>
    </li>
  </ul>
</nav>
</div>
<div className="col-md-2 col-sm-6 col-6">
<button onClick={()=>{setcart(cart+1)}} className="cartbtn"><span className="additem">Add item</span><i className="fa fa-shopping-cart"><span style={{color:"red"}}>{cart}</span></i></button>

	
</div>
<div className="col-md-2 col-sm-6 col-6">
<button type="button" className="login" data-toggle="modal" data-target="#myModal">
  Login
</button>


<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">

      
      <div className="modal-header">
     
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>

      
      <div className="modal-body">
      <div className="container">
  <form>
    <div className="form-group">
      <label for="email">Email:</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
    </div>
    <div className="form-group">
      <label for="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
    </div>
    <div className="form-group form-check">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" name="remember" /> Remember me
      </label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
      </div>

      
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>


</div>
</div>
</div>
</>
		
	)

}
export default Navbar;