import React ,{ useEffect, useState } from 'react';
import informatiques from '../images/informatiques.jpg';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Routes, useRoutes, useParams, NavLink } from 'react-router-dom';

function Portfolio() {
	const [portfolio, setportfolio] = useState([]);
	
		//const { id } = useParams();

		useEffect(() => {
		  // Fonction pour charger les données depuis le backend Laravel
		  const fetchData = async () => {
			try {
			  const response = await axios.get('http://localhost:8000/api/afficherPortfolio'); // Remplacez 'URL_DU_BACKEND' par l'URL réelle de votre backend
			  setportfolio(response.data);
			  console.log(response.data);
			} catch (error) {
			  console.error('Erreur lors du chargement des données:', error);
			}
		  };
		  // Appel de la fonction pour charger les données au montage du composant
		  fetchData();
		}, []); // Le tableau vide comme deuxième argument signifie que useEffect s'exécute une seule fois après le montage

  return (
    <section class="portfolio section" id='portfolio'>
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2>Portfolios</h2>
							<p>Quelques projet</p>
						</div>
					</div>
				</div>
			</div>
			
			<div class="container-fluid">
			
				<div class="row">
			
					<div class="col-lg-12 col-12">
					
						<div class="owl-carousel portfolio-slider" >
				
							<div class="single-pf">
								<img src={informatiques} alt="#"/>
								<Link  class="btn" onClick={() => this.changeRoute()}>Détails</Link>
							</div>
						
						</div>
						
					</div>
				
				</div>
				
			</div>
			
		</section>
  )
}

export default Portfolio