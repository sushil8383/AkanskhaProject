import React from 'react';
import MainHeader from './MainHeader';


const DoctorPage=()=>{
	return(
		<>
    <MainHeader />
    <div className=" col-md-12 col-sm-12 col-12 ">
  <div className="card-body">
    <h5 className="card-title display-1 text-light">Doctor's consultation</h5>
    <p className="card-text text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    </div>
		</>
		)
}
export default DoctorPage;