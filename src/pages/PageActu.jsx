import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useRoutes ,useNavigate} from 'react-router-dom';
import Breadcrumbs from '../components/breadcrumbs';
import Navbar from '../components/Navbar';
import informatiques from '../images/informatiques.jpg';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

function PageActu(){
   
	const color = {
		color:"#fff"

	}
    const [actu, setactu] = useState([]);


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

<div class="breadcrumbs overlay">
    <div class="container">
        <div class="bread-inner" key={donnee.id}>
            <div class="row">
                <div class="col-12">
                    <h3 style={color}>{donnee.titre}</h3>
                    <ul class="bread-list">
                    <li>Acceuil</li>
                        <li><i class="icofont-simple-right"></i></li>
                        <li class="active">Actualité</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>


<section class="portfolio-details section">
			<div class="container">
				<div class="row">
                {actu ? 
				(
					<div class="col-12">
						<div class="inner-content">
							<div class="image-slider">
								<div class="portfolio-details-slider">
                <img src={"http://localhost:8000/storage/"+donnee.photosActualite}/>
								</div>
							</div>
							<div class="body-text">
								<h5>Le {donnee.dateEvenement}</h5>
								<p>{donnee.descriptionActualite}</p>
								<div class="share">
									<h4>Partager maintenant-</h4>
									<ul>
										<li><a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
                    ):(<p>Chargement...</p>)}
				</div>
			</div>
		</section>

</div>

</div>
  )
}


export default PageActu