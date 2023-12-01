import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom';

function breacrumbsctc() {
  return (
    <div class="breadcrumbs overlay">
    <div class="container">
        <div class="bread-inner">
            <div class="row">
                <div class="col-12">
                    <h2>Contact</h2>
                    <ul class="bread-list">
                        <li><NavLink to="/">Acceuil</NavLink></li>
                        <li><i class="icofont-simple-right"></i></li>
                        <li class="active">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  )
  
}

export default breacrumbsctc