import React,{ useEffect } from  'react'
import { useParams } from 'react-router-dom';
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


const Acceuil = () => {

  const { sectionId } = useParams();

  useEffect(() => {
    if (sectionId) {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.handleClick();
      }
    }
  }, []);


  return (
    <div>

        <Slider />
        <Actual />
        <Pres />
        <Offre />
        <Portfolio />
        <Equipe />
        <Overlay />
        <News />
  </div>





  )
}

export default Acceuil