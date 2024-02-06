
import React from 'react'
import geo from '../images/geo.jpg';
import graph from '../images/graph.gif';
import DevApp from '../images/app-development.png';
import DS from '../images/data-science.png';
import Web from '../images/coding.png';
import Geo from '../images/geolocalization.png';
import Sgeo from '../images/geography.png';
import BI from '../images/brain.png';
import CD from '../images/data-collection.png';
import MAP from '../images/location.png';
import TA from '../images/analyzing.png';
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
							<h2>Offre</h2>
							<p>Domaines d'expertise de GéoAr'Tech</p>
						</div>
					</div>
				</div>


	<div class="containerd">

        <div class="card">
            <div class="front-face">
                <div class="imgBox">
                    <img src={Web} alt="Analysis"/>
                    <h4>Création d'un site web</h4>
                </div>
            </div>
            <div class="back-face">
                <div class="content">
                    <div class="imgBox">
                        <img src={Web} alt="Analysis"/>
                    </div>
                    <h4>Création d'un site web</h4>
                    <p>GéoAr'tech propose un service de création de sites web sur mesure, alliant une conception esthétique
								 et fonctionnelle pour répondre aux besoins spécifiques de votre entreprise</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="front-face">
                <div class="imgBox">
                    <img src={DevApp} alt="Design"/>
                    <h4>Développement d'application</h4>
                </div>
            </div>
            <div class="back-face">
                <div class="content">
                    <div class="imgBox">
                        <img src={DevApp} alt="Design"/>
                    </div>
                    <h4>Développement d'application</h4>
                    <p>Dédié à la création d'applications sur mesure qui répondent à vos besoins spécifiques. Forts de notre expertise technique, 
									nous concevons des solutions informatiques innovantes pour améliorer votre efficacité opérationnelle et vous démarquer dans votre secteur d'activité.</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="front-face">
                <div class="imgBox">
                    <img src={CD} alt="Development"/>
                    <h4>Collecte de données</h4>
                </div>
            </div>
            <div class="back-face">
                <div class="content">
                    <div class="imgBox">
                        <img src={CD} alt="Development"/>
                    </div>
                    <h4>Collecte de données</h4>
                    <p>GéoAr'tech offre une solution de géolocalisation avancée pour la surveillance en temps réel 
							et la gestion efficace des actifs et des véhicules, améliorant ainsi la productivité de votre entreprise.</p>
                </div>
            </div>
        </div>
		<div class="card">
            <div class="front-face">
                <div class="imgBox">
                    <img src={TA} alt="Development"/>
                    <h4>Traitement et analyse de données</h4>
                </div>
            </div>
            <div class="back-face">
                <div class="content">
                    <div class="imgBox">
                        <img src={TA} alt="Development"/>
                    </div>
                    <h4>Traitement et analyse de données</h4>
                    <p>Le service fournit une expertise de pointe dans l'acquisition, la correction et l'analyse d'images satellitaires pour la surveillance environnementale, 
								la gestion des risques et des catastrophes, offrant des informations essentielles pour des décisions éclairées</p>
                </div>
            </div>
        </div>
		<div class="card">
            <div class="front-face">
                <div class="imgBox">
                    <img src={Sgeo} alt="Development"/>
                    <h4>Système d'information géographique</h4>
                </div>
            </div>
            <div class="back-face">
                <div class="content">
                    <div class="imgBox">
                        <img src={Sgeo} alt="Development"/>
                    </div>
                    <h4>Système d'information géographique</h4>
                    <p>GéoAr'tech offre des solutions de Système d'Information Géographique (SIG) de pointe pour l'analyse, la cartographie et la gestion des données géospatiales,
								 permettant des décisions éclairées dans divers secteurs d'activité</p>
                </div>
            </div>
        </div>
		<div class="card">
            <div class="front-face">
                <div class="imgBox">
                    <img src={MAP} alt="Development"/>
                    <h4>Creation d'application web mapping</h4>
                </div>
            </div>
            <div class="back-face">
                <div class="content">
                    <div class="imgBox">
                        <img src={MAP} alt="Development"/>
                    </div>
                    <h4>Creation d'application web mapping</h4>
                    <p>Le service de webmapping offre des solutions cartographiques interactives sur mesure pour répondre à vos besoins géospatiaux. Grâce à notre expertise en cartographie en ligne, 
								nous transformons vos données en expériences cartographiques intuitives, aidant ainsi votre entreprise à visualiser, analyser et partager des informations géospatiales de manière efficace</p>
                </div>
            </div>
        </div>
		<div class="card">
            <div class="front-face">
                <div class="imgBox">
                    <img src={Geo} alt="Development"/>
                    <h4>Création d'application de Géolocalisation</h4>
                </div>
            </div>
            <div class="back-face">
                <div class="content">
                    <div class="imgBox">
                        <img src={Geo} alt="Development"/>
                    </div>
                    <h4>Création d'application de Géolocalisation</h4>
                    <p>Fournit des solutions avancées pour suivre et localiser des actifs, des véhicules, ou des ressources, permettant une gestion plus efficace et une optimisation de vos opérations. Grâce à notre expertise en géolocalisation,
							 nous vous offrons des outils précis pour surveiller en temps réel, planifier, et améliorer la gestion de vos ressources géospatiales.</p>
                </div>
            </div>
        </div>
		<div class="card">
            <div class="front-face">
                <div class="imgBox">
                    <img src={BI} alt="Development"/>
                    <h4>Business Intelligence</h4>
                </div>
            </div>
            <div class="back-face">
                <div class="content">
                    <div class="imgBox">
                        <img src={BI} alt="Development"/>
                    </div>
                    <h4>Business Intelligence</h4>
                    <p>Le service de business intelligence une plateforme puissante et intuitive qui transforme vos données en informations exploitables. Grâce à notre expertise en analyse de données et en visualisation,
							 nous vous aidons à prendre des décisions stratégiques éclairées pour la croissance et le succès de votre entreprise</p>
                </div>
            </div>
        </div>
		<div class="card">
            <div class="front-face">
                <div class="imgBox">
                    <img src={DS} alt="Development"/>
                    <h4>Data science</h4>
                </div>
            </div>
            <div class="back-face">
                <div class="content">
                    <div class="imgBox">
                        <img src={DS} alt="Development"/>
                    </div>
                    <h4>Data science</h4>
                    <p>Votre partenaire de confiance pour l'exploration et l'exploitation de vos données.
									 Notre équipe d'experts en data science combine des méthodologies avancées avec une connaissance approfondie des données géospatiales pour vous fournir des insights précieux,
								 facilitant ainsi la prise de décisions éclairées et l'optimisation de vos opérations</p>
                </div>
            </div>
        </div>
    </div>
	</div>

		</section>	
  )
}

export default Offre
/*
<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2>Offre</h2>
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
								<li>GéoAr'tech propose un service de création de sites web sur mesure, alliant une conception esthétique
								 et fonctionnelle pour répondre aux besoins spécifiques de votre entreprise</li>
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
							
								<li>Le service de développement informatique de GéoAr'tech est dédié à la création d'applications sur mesure qui répondent à vos besoins spécifiques. Forts de notre expertise technique, 
									nous concevons des solutions informatiques innovantes pour améliorer votre efficacité opérationnelle et vous démarquer dans votre secteur d'activité.</li>				
						
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
									
								</div>
								<h4 class="title">Collecte de données</h4>
							</div>
							<li>GéoAr'tech offre une solution de géolocalisation avancée pour la surveillance en temps réel 
							et la gestion efficace des actifs et des véhicules, améliorant ainsi la productivité de votre entreprise.</li>
					
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
						
								</div>
								<h4 class="title">Traitement et analyse de données</h4>	
							</div>

							<li>Le service de traitement d'image satellitaire de GéoAr'tech fournit une expertise de pointe dans l'acquisition, la correction et l'analyse d'images satellitaires pour la surveillance environnementale, 
								la gestion des risques et des catastrophes, offrant des informations essentielles pour des décisions éclairées</li>
						<ul class="table-list">
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
			
							<li>GéoAr'tech offre des solutions de Système d'Information Géographique (SIG) de pointe pour l'analyse, la cartographie et la gestion des données géospatiales,
								 permettant des décisions éclairées dans divers secteurs d'activité</li>
					
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
									
								</div>
								<h4 class="title">Creation d'application web mapping</h4>
							</div>
					
							<li>Le service de webmapping offre des solutions cartographiques interactives sur mesure pour répondre à vos besoins géospatiaux. Grâce à notre expertise en cartographie en ligne, 
								nous transformons vos données en expériences cartographiques intuitives, aidant ainsi votre entreprise à visualiser, analyser et partager des informations géospatiales de manière efficace</li>
						
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
								
								</div>
								<h4 class="title">Création d'application de Géolocalisation</h4>	
							</div>
							<li>Le service de géolocalisation vous fournit des solutions avancées pour suivre et localiser des actifs, des véhicules, ou des ressources, permettant une gestion plus efficace et une optimisation de vos opérations. Grâce à notre expertise en géolocalisation,
							 nous vous offrons des outils précis pour surveiller en temps réel, planifier, et améliorer la gestion de vos ressources géospatiales.</li>
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
						
								</div>
								<h4 class="title">Business Intelligence</h4>
							</div>
					
							<li>Le service de business intelligence une plateforme puissante et intuitive qui transforme vos données en informations exploitables. Grâce à notre expertise en analyse de données et en visualisation,
							 nous vous aidons à prendre des décisions stratégiques éclairées pour la croissance et le succès de votre entreprise</li>
						
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<div class="table-head">
								<div class="icon">
								</div>
								<h4 class="title">Data science</h4>
								<li>Le service de data science de GéoAr'tech est votre partenaire de confiance pour l'exploration et l'exploitation de vos données.
									 Notre équipe d'experts en data science combine des méthodologies avancées avec une connaissance approfondie des données géospatiales pour vous fournir des insights précieux,
								 facilitant ainsi la prise de décisions éclairées et l'optimisation de vos opérations</li>
							</div>
					
						</div>
					</div>
				</div>	
			</div>	*/ 