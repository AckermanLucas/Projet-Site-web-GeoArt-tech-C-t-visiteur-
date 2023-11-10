import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import geo from './geo.jpg';
import { Link as ScrollLink  } from 'react-scroll';


function Navbar() {
  return (
    <>
      <header class="header" >
        <div class="header-inner">
          <div class="container">
            <div class="inner">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-12">
                  <div class="logo">
                    <a href=""><img src={geo} alt=""/></a>
                  </div> 
                  <div class="mobile-nav"></div>
                </div>
                <div class="col-lg-14 col-md-9 col-12">
          
                  <div class="main-menu">
                    <nav class="navigation">
                      <ul class="nav menu">
                        <li>
                        <ScrollLink
                              activeClass="active"
                              to="section1"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                            >
                              Acceuil
                            </ScrollLink>
                            <i class="house"></i>
                        </li>
                                  
                        <li>
                        <ScrollLink
                              className="nav li a"
                              activeClass="active"
                              to="presentation"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={800}
                            >
                              Qui somme nous ?
                            </ScrollLink>
                        </li>
                        <li>
                        <ScrollLink
                              className="nav li a"
                              activeClass="active"
                              to="actualite"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={800}
                            >
                             Actualité
                            </ScrollLink>
                        </li>
                        <li>
                        <ScrollLink
                              className="nav li a"
                              activeClass="active"
                              to="offre"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={800}
                            >
                             Offres
                            </ScrollLink>
                        </li>
                        <li><a href="#">Partenaire </a></li>
                        <li><a href="#">Nos équipes </a></li>
                        <li><a href="#">Contact </a></li>
                      </ul>
                    </nav>
                  </div>
                </div>	
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar;