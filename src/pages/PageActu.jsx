import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useRoutes ,useNavigate} from 'react-router-dom';
import Breadcrumbs from '../components/breadcrumbs';
import Navbar from '../components/Navbar';
import informatiques from '../images/informatiques.jpg';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

function PageActu(){
   
    const [actu, setactu] = useState([]);
		
		/*useEffect(() => {
		  // Fonction pour charger les données depuis le backend Laravel
		  const fetchData = async () => {
			try {
			  const response = await axios.get('http://localhost:8000/api/afficherActualite/${id}'); // Remplacez 'URL_DU_BACKEND' par l'URL réelle de votre backend
			  setactu(response.data);
		
			} catch (error) {
			  console.error('Erreur lors du chargement des données:', error);
			}
		  };
		  // Appel de la fonction pour charger les données au montage du composant
		  fetchData();
		}, [id]); // Le tableau vide comme deuxième argument signifie que useEffect s'exécute une seule fois après le montage*/

        let {id}=useParams();
  
  const navigate= useNavigate()
  const [chargement, modifChargement] = useState(false)
  const [donnee, modifDonnee] = useState({});
  const [fichier, setFichier] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/afficherActualite/${id}`)
    .then(res=>{
          modifDonnee(res.data.actualite)
          console.log(res.data.actualite);
          modifChargement(false);
      });
  }, [id])

  const sortedActu = actu.sort((a, b) => new Date(a.dateEvenement) - new Date(b.dateEvenement));
		const reverseactu = sortedActu.reverse();

  return (
<div>
<div>   

<Breadcrumbs/>

<section class="news-single section">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-12">
                <div class="row">
                {actu ? (
                    <div class="col-12">
                        <div class="single-main" key={donnee.id}>
                            <div class="news-head">
                            <img src={"http://localhost:8000/storage/"+donnee.photosActualite}/>
                            </div>
                            <div class="meta">
										<div class="meta-left">
											<span class="date"><i class="fa fa-clock-o"></i>
                                            {donnee.dateEvenement}
                                            </span>
										</div>
							</div>
                            <h1 class="news-title"><a>{donnee.titre}</a></h1>
                            <div class="news-text">
                                <p>{donnee.descriptionActualite}</p>
                            <div class="blog-bottom">
                                <ul class="social-share">
                                    <li class="facebook"><a href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a></li>
                                    <li class="twitter"><a href="#"><i class="fa fa-twitter"></i><span>Twitter</span></a></li>
                                    <li class="linkedin"><a href="#"><span>Linked </span><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                ):(<p>Chargement...</p>)}
            </div>
           
            </div>


        </div>
    </div>
</section>

</div>

</div>
  )
}


export default PageActu