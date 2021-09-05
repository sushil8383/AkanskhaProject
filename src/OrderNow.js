import React from 'react';
import Header from './Header';
import nut1 from './images/nut1.jpg';
import nut2 from './images/nut2.jpg';
import nut3 from './images/nut3.jpg';
const OrderNow=()=>{
	return(
		<>
		<Header />

		<div className="container">
    <div className="row">
        <div className="col-md-4">
            <figure className="card card-product-grid card-lg"> <a href="#" className="img-wrap" data-abc="true"><img src={nut1}/></a>
                <figcaption className="info-wrap">
                    <div className="row">
                        <div className="col-md-8"> <a href="#" className="title" data-abc="true">Ensure </a> </div>
                        <div className="col-md-4">
                            <div className="rating text-right"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                        </div>
                    </div>
                </figcaption>
                <div className="bottom-wrap"> <a href="#" className="btn btn-primary float-right" data-abc="true"> Buy now </a>
                    <div className="price-wrap"> <span className="price h5">$499</span> <br /> <small className="text-success">Free shipping</small> </div>
                </div>
            </figure>
        </div>
        <div className="col-md-4">
            <figure className="card card-product-grid card-lg"> <a href="#" className="img-wrap" data-abc="true"><img src={nut2}/></a>
                <figcaption className="info-wrap">
                    <div className="row">
                        <div className="col-md-8"> <a href="#" className="title" data-abc="true">Healthy food</a> </div>
                        <div className="col-md-4">
                            <div className="rating text-right"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                        </div>
                    </div>
                </figcaption>
                <div className="bottom-wrap"> <a href="#" className="btn btn-primary float-right" data-abc="true"> Buy now </a>
                    <div className="price-wrap"> <span className="price h5">$369</span> <br /> <small className="text-success">Free shipping</small> </div>
                </div>
            </figure>
        </div>
        <div className="col-md-4">
            <figure className="card card-product-grid card-lg"> <a href="#" className="img-wrap" data-abc="true"><img src={nut3 }/></a>
                <figcaption className="info-wrap">
                    <div className="row">
                        <div className="col-md-8"> <a href="#" className="title" data-abc="true">Herbalife</a> </div>
                        <div className="col-md-4">
                            <div className="rating text-right"> <i className="fa fa-star"></i> </div>
                        </div>
                    </div>
                </figcaption>
                <div className="bottom-wrap"> <a href="#" className="btn btn-primary float-right" data-abc="true"> Buy now </a>
                    <div className="price-wrap"> <span className="price h5">$409</span> <br /> <small className="text-success">Free shipping</small> </div>
                </div>
            </figure>
        </div>
        
        
        
    </div>
</div>


		</>
		)
}
export default OrderNow;