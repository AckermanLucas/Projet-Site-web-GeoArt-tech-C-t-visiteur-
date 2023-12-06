import React ,{ useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useRoutes, useParams } from 'react-router-dom';
import informatiques from '../images/lucas.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/slick.css';

import axios from 'axios';

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

function Equipe() {


  const [equipe, setequipe] = useState([]);
  useEffect(() => {
    // Fonction pour charger les données depuis le backend Laravel
    const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/afficherPersonnel'); // Remplacez 'URL_DU_BACKEND' par l'URL réelle de votre backend
      setequipe(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
    }
    };
  
    // Appel de la fonction pour charger les données au montage du composant
    fetchData();
  }, []); // Le tableau vide comme deuxième argument signifie que useEffect s'exécute une seule fois après le montage

  return (
    <section class="actualite section" id='equipe'>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title">
                    <h2>Notre équipes</h2>
                    <p>Voici les dirigeants de notre équipe</p>
                </div>
            </div>
        </div>
        <div class="row">
        <div class="col-lg-12 col-md-6 col-12">
        <Slider {...settings}>
          

      {equipe.map(item => (
          <div className="card" key={item.id}>
            <div className="image">
              <img src={"http://localhost:8000/storage/"+item.photoPersonnel}/>
            </div>
            <h5>{item.nom}  {item.prenoms}</h5>
                <p>{item.poste}</p>

         <div class="social-buttons">
            <button class="social-button" onclick="window.location.href='https://www.facebook.com/'">
              <i class="icofont-facebook"></i>
            </button>
            <button class="social-button" onclick="window.location.href='https://www.linkedin.com/'">
              <i class="icofont-linkedin"></i>
            </button>
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

export default Equipe

