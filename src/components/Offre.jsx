import React, { useState } from 'react'



const colort = {
    color: '#02b653', 
  };
  const colorp = {
    color: '#fff', 
  };

function Offre() {
    const [cartes] = useState([
        {
            title : "Création de site web",
            text : '',
        },
        {
            title : "Developpement d'Application (web, mobile, bureau)",
            text : 'Devellopement application web ou desktop',
        },
        {
            title : "Collecte de données",
            text : '',
        },
        {
            title : "Traitement et analyse de données",
            text : '(Spatiales ou non, satellitaires)',
        },
        {
            title : "Système d'Information Géographique",
            text : '(Cartographie numérique, base de données spatiales, analyses spatiales)',
        },
        {
            title : "Création d'application Web mapping",
            text : "",
        },
        {
            title : "Création d'application de Géolocalisation",
            text : "",
        },
        {
            title : "Traitement automatique de données",
            text : "(Spatiales ou non)",
        },
        {
            title : "Business Intelligence",
            text : "(Production de tableaux de bord, carte thématiques)",
        },
        {
            title : "Data science",
            text : "",
        }


    ])
  return (
    <div>
        <section id="offre">
        <div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2 style={colort}>Nos offres</h2>		
							<p>Découvrez notre domaine d'expértise !</p>
						</div>
					</div>
				</div>
                <div className="container">
                        <div className="cartes">
                        
                                {cartes.map((card, i) => (
                                    <div key={i} className='carte'>
                                            <h4>{card.title}</h4>
                                            <p style={colorp}>{card.text}</p>
                                    </div>
                                    ))}
                        </div>
                    </div>
            </div>
		</section>
    </div>
  )
}

export default Offre