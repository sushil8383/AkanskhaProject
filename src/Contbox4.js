import React,{useState} from 'react';
import brand1 from './images/brand1.jpg';
import brand2 from './images/brand2.jpg';
import brand3 from './images/brand3.jpg';
const Contbox3=()=>{
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
        <img src={brand1} alt="product" />
        
      </div>
    </div>
  </div>
  <div  className=" col-md-4 col-sm-12 col-12">
    <div className="">
      <div className="card-body">
        <img  src={brand2} alt="product" />
        
      </div>
    </div>
  </div>

{
  show?
  <><div className=" col-md-4 col-sm-12 col-12">
    <div className="">
      <div className="card-body">
        <img src={brand3} alt="product" />
        
      </div>
    </div>
  </div>
  <div className=" col-md-4 col-sm-12 col-12">
    <div className="">
      <div className="card-body">
        <img src={brand2} alt="product" />
        
      </div>
    </div>
  </div>
  <div className=" col-md-4 col-sm-12 col-12">
    <div className="">
      <div className="card-body">
        <img src={brand2} alt="product" />
        
      </div>
    </div>
  </div>
  </>

  :null
}
  
  

  <div className=" col-md-3 col-sm-12 col-12">
        <a onClick={btn} className="btn btn-success" style={{marginTop:"150px",float:"right", backgroundColor:"green"}}>view more</a>
  </div>



</div>
</div>
    </>
    )
}
export default Contbox3;