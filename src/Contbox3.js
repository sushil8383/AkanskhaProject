import React,{useState} from 'react';
import nut1 from './images/nut1.jpg';
import nut2 from './images/nut2.jpg';
import nut3 from './images/nut3.jpg';
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
        <img src={nut1} alt="product" />
        
      </div>
    </div>
  </div>
  <div  className=" col-md-4 col-sm-12 col-12">
    <div className="">
      <div className="card-body">
        <img  src={nut2} alt="product" />
        
      </div>
    </div>
  </div>

{
  show?
  <><div className=" col-md-4 col-sm-12 col-12">
    <div className="">
      <div className="card-body">
        <img src={nut3} alt="product" />
        
      </div>
    </div>
  </div>
  <div className=" col-md-4 col-sm-12 col-12">
    <div className="">
      <div className="card-body">
        <img src={nut2} alt="product" />
        
      </div>
    </div>
  </div>
  <div className=" col-md-4 col-sm-12 col-12">
    <div className="">
      <div className="card-body">
        <img src={nut2} alt="product" />
        
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
export default Contbox3;