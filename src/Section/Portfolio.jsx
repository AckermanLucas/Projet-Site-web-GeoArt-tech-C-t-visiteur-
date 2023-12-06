import React ,{ useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useRoutes, useParams } from 'react-router-dom';
import informatiques from '../images/informatiques.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


//import '../components/slick.css';


import axios from 'axios';
const settings = {
    loop:true,
		autoplay:true,
		smartSpeed: 500,
		autoplayTimeout:3500,
    dots: true,
    infinite: false,
    nav:true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
  
<section class="portfolio section" >
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2>Portfolios</h2>
							<p>Projet réalisés</p>
						</div>
					</div>
				</div>
			</div>
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12 col-12">
          <Slider {...settings}>
          {portfolio.map(item => (
						<div class="owl-carousel portfolio-slider">
            
          <div class="single-pf" key={item.id}>
            <img src={`http://localhost:8000/storage/${item.photosPortfolio}`} alt={`Portfolio ${item.id}`} />
            <Link to={`/Portfolio/${item.id}`} class="btn" onClick={() => this.changeRoute()}>
              Détails
            </Link>
          </div>
						</div>
             ))}
            </Slider>
					</div>
				</div>
			</div>
		</section>













    




  )
}

export default Portfolio