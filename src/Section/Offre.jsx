
/*import React from 'react'
import informatiques from './informatiques.jpg';


function Offre() {
  return (
<section class="services section">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2 style={colort}>Notre offre</h2>
							<p>Consultez les offres de GéoAr'Tech</p>
						</div>
					</div>
				</div>				
			<div class="row">
					<div class="col-lg-4 col-md-6 col-12" >
						<div class="single-service">
							<i class=""></i>
							<h4><a href="service-details.html">Création de site web</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-12">
						<div class="single-service">
							<i class="icofont-paper-plane"></i>
							<h4><a href="service-details.html">Développement d'application(web, mobile, bureau)</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-12">
						<div class="single-service">
							<i class="icofont-paper-plane"></i>
							<h4><a href="service-details.html">Collecte de données</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
					</div>                                                                                                                                                                                                                                                        
					<div class="col-lg-4 col-md-6 col-12">
						<div class="single-service">
							<i class="icofont-paper-plane"></i>
							<h4><a href="service-details.html">Traitement et analyse de données(spatiale ou non, satellitaires)</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-12">
						<div class="single-service">
							<i class="icofont-paper-plane"></i>
							<h4><a href="service-details.html">Système d'information géographique(cartographie numérique, base de données spatiales, analyse spatiales)</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-12">
						<div class="single-service">
							<i class="icofont-paper-plane"></i>
							<h4><a href="service-details.html">Creation d'application web mapping</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-12">
						<div class="single-service">
							<i class="icofont-"></i>
							<h4><a href="service-details.html">Création d'application de Géolocalisation</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-12">
						<div class="single-service">
							<i class="icofont-paper-plane"></i>
							<h4><a href="service-details.html">Traitement automatique de données (spatiales ou non)</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
				
					</div>
					<div class="col-lg-4 col-md-6 col-12">
					
						<div class="single-service">
							<i class="icofont-paper-plane"></i>
							<h4><a href="service-details.html">Business Intelligence (production de ta bleaux de bord, cartes thématiques)</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
						
					</div>
					<div class="col-lg-4 col-md-6 col-12">
						<div class="single-service">
							<i class="icofont-paper-plane"></i>
							<h4><a href="service-details.html">Data science</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
					
					</div>
				</div>
			</div>
		</section>
  )
}

export default Offre*/

import React from 'react'
import geo from '../images/geo.jpg';
import graph from '../images/graph.gif';
import offre from '../images/offrir1.png';

const colort = {
    color: '#02b653', 
  };
  const colorp = {
    color: '#fff', 
  };

function Offre() {
  return (
	<section class="pricing-table section" id="domaine">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2>Découvrez nos domaines d'expertise</h2>
							<img src={offre}/>
							<p>Domaines d'expertise de GéoAr'Tech</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
							
								</div>
								<h4 class="title">Création d'un site web</h4>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
						
								</div>
								<h4 class="title">Développement d'application</h4>	
							</div>
							<ul class="table-list">
								<li><i className="icofont icofont-ui-check"></i>Web</li>
								<li><i class="icofont icofont-ui-check"></i>Mobile</li>
								<li><i class="icofont icofont-ui-check"></i>Bureau</li>
								
							</ul>
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
									
								</div>
								<h4 class="title">Collecte de données</h4>
							</div>
					
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
						
								</div>
								<h4 class="title">Traitement et analyse de données</h4>	
							</div>
							<ul class="table-list">
							<li><i class="icofont icofont-ui-check"></i>Spatiale</li>
							<li><i class="icofont icofont-ui-check"></i>Non spatiale</li>
							<li><i class="icofont icofont-ui-check"></i>Satellitaire</li>
							</ul>
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
							
								</div>
								<h4 class="title">Système d'information géographique</h4>
							</div>
							<ul class="table-list">
							<li><i className="icofont icofont-ui-check"></i>cartographie numérique</li>
							<li><i class="icofont icofont-ui-check"></i>base de données spatiales</li>
							<li><i class="icofont icofont-ui-check"></i>analyse spatiales</li>
							</ul>
					
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
									
								</div>
								<h4 class="title">Creation d'application web mapping</h4>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
								
								</div>
								<h4 class="title">Création d'application de Géolocalisation</h4>	
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
						
								</div>
								<h4 class="title">Business Intelligence</h4>
							</div>
							<ul class="table-list">
							<li><i className="icofont icofont-ui-check"></i>Production de tableaux de bords</li>
							<li><i class="icofont icofont-ui-check"></i>Cartes thématiques</li>
							</ul>
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
					
								</div>
								<h4 class="title">Data science</h4>
							</div>
					
						</div>
					</div>
				</div>	
			</div>	
		</section>	
  )
}

export default Offre