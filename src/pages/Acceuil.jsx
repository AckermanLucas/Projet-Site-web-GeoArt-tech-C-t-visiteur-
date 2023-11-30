import React from 'react'
import Slider from '../Section/Slider';
import Actual from '../Section/Actual';
import Pres from '../Section/Pres';
import Offre from '../Section/Offre';
import Partenaires from '../Section/Partenaires';
import News from '../Section/News';
import Overlay from '../Section/Overlay';
import Equipe from '../Section/Equipe';
import Contacter from '../Section/Contacter';
import Portfolio from '../Section/Portfolio';

function Acceuil() {
  return (
    
    <div>
        <Slider />
        <Actual />
        <Pres />
        <Offre />
        <Partenaires />
        <Portfolio />
        <Equipe />
        <Overlay />
        <News />
  
  </div>





  )
}

export default Acceuil