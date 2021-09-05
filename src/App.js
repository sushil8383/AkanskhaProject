import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import MainHeader from './MainHeader';
import Banner from './Banner';
import Contbox1 from './Contbox1';
import Contbox2 from './Contbox2';
import Contbox3 from './Contbox3';
import Contbox4 from './Contbox4';
import Feature from './Feature';
import Footer from './Footer';


const App=()=>{
  return(
    <>
    <MainHeader />
    
  
    <Banner />
    <Contbox1 />
    <Contbox2 />
    <Contbox3 />
    <Contbox4 />
    <Feature />
    <Footer />
 

    </>)

}
export default App;