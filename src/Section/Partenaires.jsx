import React from 'react'
import geo from '../images/geo.jpg';
import uf from '../images/UF.png'
function Partenaires() {
  return (
<div class="clients">
			<div class="container" id="partenaire">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-12">
						<div class="owl-carousel clients-slider">
							<div class="single-clients">
								<img src={uf} alt="Univ"/>
							</div>
							<div class="single-clients">
								<img src={uf} alt="#"/>
							</div>
              <div class="single-clients">
								<img src={uf} alt="#"/>
							</div>
              <div class="single-clients">
								<img src={uf} alt="#"/>
							</div>
              <div class="single-clients">
								<img src={geo} alt="#"/>
							</div>
              <div class="single-clients">
								<img src={geo} alt="#"/>
							</div>
              <div class="single-clients">
								<img src={geo} alt="#"/>
							</div>
              <div class="single-clients">
								<img src={geo} alt="#"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Partenaires