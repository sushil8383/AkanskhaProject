import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import KnockPage from './KnockPage';
import HealthPage from './HealthPage';
import DoctorPage from './DoctorPage';
import OrderNow from './OrderNow';
import BookNow from './BookNow';
import FindLocation from './FindLocation';

import { Route, BrowserRouter as Router } from 'react-router-dom' ;

const routing = (  
  <Router>  
    <div> 
      <Route exact path="/" component={App} />  
      <Route path="/knock" component={KnockPage} />  
      <Route path="/health" component={HealthPage} />  
      <Route path="/doctor" component={DoctorPage} />
      <Route path="/ordernow" component={OrderNow} /> 
      <Route path="/booknow" component={BookNow} /> 
      <Route path="/findlocation" component={FindLocation} /> 



 

    </div>

  </Router>  
)   

ReactDOM.render(
    routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
