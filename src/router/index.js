import React, {Component} from 'react'
import { ReactDOM } from 'react';
import {Routes, Route, Router, } from 'react-router-dom';
import Acceuil from '../pages/Acceuil';
import PageContact from '../pages/PageContact';
import PageActu from '../pages/PageActu';
import PagePortfolio from '../pages/PagePortfolio';
import PageTouteActu from '../pages/PageTouteActu';



const MyRouter = ()=> {


  return (
      <Routes>
        <Route path='/' element={<Acceuil/>} />
        <Route path='/Actualité' element={<Acceuil/>} />
        <Route path='/Presentation' element={<Acceuil/>} />
        <Route path='/Equipe' element={<Acceuil/>} />
        <Route path='/Partenaires' element={<Acceuil/>} />
        <Route path='/Portfolios' element={<Acceuil/>} />
        <Route path='/Offre' element={<Acceuil/>} />
        <Route path='/Contact' element={<PageContact />} />
        <Route path='/Actualite/:id' element={<PageActu/>} />
        <Route path='Toutes_Actualité' element={<PageTouteActu/>} />
        <Route path='/Portfolio/:id' element={<PagePortfolio/>} />

      </Routes>
  )
} 

export default MyRouter;
