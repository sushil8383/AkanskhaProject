import React from 'react';
import Header from './Header';
const BookNow=()=>{
	return(
		<>
		<Header />
		<div id="booking" className="section">
    <div className="section-center">
        <div className="container">
            <div className="row">
                <div className="booking-form">
                    <div className="form-header">
                        <h1>Book now from home</h1>
                    </div>
                    <form>
                        <div className="form-group"> <input className="form-control" type="text" placeholder="Country, ZIP, city..." /> <span className="form-label">Destination</span> </div>
                       
                      
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group"> <input className="form-control" type="email" placeholder="Enter your Email" /> <span className="form-label">Email</span> </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group"> <input className="form-control" type="tel" placeholder="Enter you Phone" /> <span className="form-label">Phone</span> </div>
                            </div>
                        </div>
                        <div className="form-btn"> <button className="submit-btn">Book Now</button> </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


		</>
		)
}
export default BookNow;