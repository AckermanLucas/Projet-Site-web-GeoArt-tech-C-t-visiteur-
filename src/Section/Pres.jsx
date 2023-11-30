import React from 'react';

const color = {
    color: '#02b653', 
  };

function Actualite() {
  return (
    <section class="why-choose section" id="presentation">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2 style={color}>Présentation</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-6 col-12">
				
						<div class="choose-left">
							<h3>Qui sommes nous?</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo. </p>
							<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
							
						</div>
					
					</div>
					<div class="col-lg-6 col-12">
					
						<div class="choose-right">
							<div class="video-image">
						
								<div class="promo-video">
									<div class="waves-block">
										<div class="waves wave-1"></div>
										<div class="waves wave-2"></div>
										<div class="waves wave-3"></div>
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

export default Actualite