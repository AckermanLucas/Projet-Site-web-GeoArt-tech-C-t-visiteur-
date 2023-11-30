import React, { useState, useEffect } from 'react';
import axios from 'axios';
import informatiques from '../images/informatiques.jpg';
import { BrowserRouter as Router, Link, Route, Routes, useRoutes, useParams, useNavigate} from 'react-router-dom';
import Breadcrumbsport from '../components/breadcrumbsport';
function PagePortfolio() {


    const [portfolio, setportfolio] = useState([]);
        let {id}=useParams();
  
  const navigate= useNavigate()
  const [chargement, modifChargement] = useState(false)
  const [donnee, modifDonnee] = useState({});
  const [fichier, setFichier] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/afficherPortfolio/${id}`)
    .then(res=>{
          modifDonnee(res.data.portfolio)
          console.log(res.data.portfolio);
          modifChargement(false);
      });
  }, [id])

  return (

<div>
<div>   
    <Breadcrumbsport/>

<section class="pf-details section">
			<div class="container">
				<div class="row">
                {portfolio ? (
					<div class="col-12">
						<div class="inner-content">
							<div class="image-slider">
								<div class="pf-details-slider">
									<img src={informatiques} alt="#"/>	
								</div>
							</div>
							<div class="date">
								<ul>
									<li><span>Date :</span> April 20, 2019</li>
                                    <li><span>Client :</span> {donnee.nomEntreprise}</li>
								</ul>
							</div>
							<div class="body-text">
								<h3>{donnee.nomEntreprise}</h3>
								<p>{donnee.descriptionPortfolio}</p>
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

export default PagePortfolio