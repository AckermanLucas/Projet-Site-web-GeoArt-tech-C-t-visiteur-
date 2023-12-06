import React from 'react'
import geo from '../images/geo.jpg';
import uf from '../images/UF.png'
function Partenaires() {
  return (

<section class="actualite section" id='partenaire'>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title">
                    <h2>Partenaires</h2>
                </div>
            </div>
        </div>




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
		</div>
  
  </section>
  )
}

export default Partenaires