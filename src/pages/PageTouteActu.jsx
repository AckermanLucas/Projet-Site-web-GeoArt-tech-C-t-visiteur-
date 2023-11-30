import React ,{ useEffect, useState } from 'react';
import informatiques from '../images/informatiques.jpg';
import axios from 'axios';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { BrowserRouter as Router, Link, Route, Routes, useRoutes, useParams } from 'react-router-dom';
import PageActu from '../pages/PageActu';
import Breadcrumbs from '../components/breadcrumbs';

const color = {
    color: '#02b653', 
  };

	function PageTouteActu() {
		const [actu, setactu] = useState([]);
	
		//const { id } = useParams();

		useEffect(() => {
		  // Fonction pour charger les données depuis le backend Laravel
		  const fetchData = async () => {
			try {
			  const response = await axios.get('http://localhost:8000/api/afficherActualite'); // Remplacez 'URL_DU_BACKEND' par l'URL réelle de votre backend
			  setactu(response.data);
			  console.log(response.data);
			} catch (error) {
			  console.error('Erreur lors du chargement des données:', error);
			}
		  };
	  
		  // Appel de la fonction pour charger les données au montage du composant
		  fetchData();
		}, []); // Le tableau vide comme deuxième argument signifie que useEffect s'exécute une seule fois après le montage

	
		const sortedActu = actu.sort((a, b) => new Date(a.dateEvenement) - new Date(b.dateEvenement));
		const reverseactu = sortedActu.reverse();
  return (
<div>
<div>   

<Breadcrumbs/>

    <section class="blog section" id="actualite">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="section-title">
					<h2>actualités</h2>
					<p>Consultez les dernières actualités sur GéoAr'Tech</p>
				</div>
			</div>
		</div>
		<div class="row">
			{reverseactu.map(item => (
					<div class="col-lg-4 col-md-6 col-12">
					<div class="single-news" key={item.id}>
					<div class="news-head"> 
						<img src={informatiques} alt=""/>
					</div>
					<div class="news-body">
						<div class="news-content">
							<div class="date"><i class="fa fa-calendar" aria-hidden="true"></i>{format(new Date(item.dateEvenement), '  dd MMMM yyyy', { locale: fr })}</div>
					  <h2><a href="blog-single.html">{item.titre}</a></h2>
					  <p class="text">{item.descriptionActualite}</p>
							<Link to={`/Actualite/${item.id}`} class="btn" onClick={() => this.changeRoute()}>Détails</Link>
						</div>
					</div>
				  </div>	
		  </div>	
			))}
			  
	  </div>
  </div>
</section>

</div>
</div> 






  )
}

export default PageTouteActu