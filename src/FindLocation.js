import React from 'react';
import Header from './Header';
const FindLocation=()=>{
	return(
		<>
		<Header />
	

<div id="map-container-google-3" class="z-depth-1-half map-container-3">
  <iframe src="https://maps.google.com/maps?q=warsaw&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
    style={{border:"0"}} allowfullscreen></iframe>
</div>
		</>
		)
}
export default FindLocation;