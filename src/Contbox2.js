import React,{useState} from 'react';
import product1 from './images/product1.jpg';
import product2 from './images/product2.jpg';
import product3 from './images/product3.jpg';
const Contbox2=()=>{
  const [show,setshow] = useState(false);
  const btn=()=>{
    setshow(!show);
  }
  


	return(
		<>

		<div className="container card my-2"><span style={{backgroundColor:'red',width:"250px",height:"40px",marginLeft:"-20px",padding:"10px"}}>Medical safety 
products</span>
		<div className="row p-2">
  <div className=" col-md-4 col-sm-12 col-12">
    <div className="">

      <div className="card-body">
        <img src={product1} alt="product" />
        
      </div>
    </div>
  </div>
  <div  className=" col-md-4 col-sm-12 col-12">
    <div className="">
      <div className="card-body">
        <img  src={product2} alt="product" />
        
      </div>
    </div>
  </div>

{
  show?
  <><div className=" col-md-4 col-sm-12 col-12">
    <div className="">
      <div className="card-body">
        <img src={product3} alt="product" />
        
      </div>
    </div>
  </div>
  <div className=" col-md-4 col-sm-12 col-12">
    <div className="">
      <div className="card-body">
        <img src={product2} alt="product" />
        
      </div>
    </div>
  </div>
  <div className=" col-md-4 col-sm-12 col-12">
    <div className="">
      <div className="card-body">
        <img src={product2} alt="product" />
        
      </div>
    </div>
  </div>
  </>

  :null
}
  
  

  <div className=" col-md-3 col-sm-12 col-12">
        <a onClick={btn} className="btn btn-success" style={{marginTop:"150px",float:"right",backgroundColor:"green"}}>view more</a>
  </div>



</div>
</div>
		</>
		)
}
export default Contbox2;