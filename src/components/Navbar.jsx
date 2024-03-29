import React, {useEffect} from 'react';
import geo from '../images/geo.jpg';
import { scroller } from 'react-scroll' ;
import { BrowserRouter, NavLink } from 'react-router-dom';
//import MyRouter from './router/index.js';


const sections = document.querySelectorAll('div[id^="section"]');
const navLinks = document.querySelectorAll('header nav');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;
      activateNavLink(sectionId);
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

function activateNavLink(sectionId) {
  navLinks.forEach((link) => {
    const linkHref = link.getAttribute('href').substring(1); // Remove the '#' from the href
    if (linkHref === sectionId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function Navbar() {
  

  const handleClick = (to) => {
    
    // Utiliser react-scroll pour faire défiler vers l'élément cible
    scroller.scrollTo(to, {
      spy:true,
      smooth:true,
      offset:-70,
      duration:800,
     
    });
  };
  
  return (
      <header class="header" >
        <div class="header-inner">
          <div class="container">
            <div class="inner">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-12">
                  <div class="logo">
                    <a href=""><img src={geo}/></a>
                  </div> 
               
								<div class="mobile-nav"></div>
				
							</div>
							<div class="col-lg-7 col-md-9 col-12">
				
								<div class="main-menu">
									<nav class="navigation">
                      <ul class="nav menu">
              
                        <li>
                        <li ><NavLink to="/"  activeclass="active" onClick={() => {
                            handleClick("actualite");
                            window.location.load();
                          }}
                         
                        style={({isActive})=>{return {color:isActive?'#2C2D3F':''}}} >Accueil</NavLink></li>
                        </li>

                        <li>
                        <NavLink to="/Actualité"  activeclass="active" onClick={() => {
                            handleClick("actualite");
                            
                          }}

                        style={({isActive})=>{return {color:isActive?'#2C2D3F':''}}} >Actualités</NavLink>
                        </li>

                        <li><a>Société <i class="icofont-rounded-down"></i></a>
												<ul class="dropdown">
													<li><NavLink to="/Presentation" onClick={() => handleClick("presentation")}
                          style={({isActive})=>{return {color:isActive?'#02b653':''}}}
                          >Qui somme nous ?</NavLink></li>
                          <li>
                        <NavLink to="/Equipe" onClick={() => handleClick("equipe")}
                        style={({isActive})=>{return {color:isActive?'#02b653':''}}}
                        >Notre équipes</NavLink>   
                        </li>
                        <li>
                        <NavLink to="/Partenaires" onClick={() => handleClick("")}
                        style={({isActive})=>{return {color:isActive?'#02b653':''}}}
                        >Partenaires</NavLink> 
                        </li>
												</ul>
											</li>
                        <li>
                        <NavLink to="/Offre" onClick={() => handleClick("domaine")}
                        style={({isActive})=>{return {color:isActive?'#02b653':''}}}
                        >Offre</NavLink>  
                        </li>    
                        <li>
                        <NavLink to="/Portfolios" onClick={() => handleClick("portfolio")}
                        style={({isActive})=>{return {color:isActive?'#02b653':''}}}
                        >Portfolios</NavLink>   
                        </li>
                        <li>
                        <NavLink to="/Contact"  onClick={() => this.changeRoute()} 
                        style={({isActive})=>{return {color:isActive?'#2C2D3F':''}}}>Contact</NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>	
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Navbar;