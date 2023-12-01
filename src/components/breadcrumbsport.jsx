import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom';

function breadcrumbsport() {
  return (
    <div class="breadcrumbs overlay">
    <div class="container">
        <div class="bread-inner">
            <div class="row">
                <div class="col-12">
                    <h2>Portfolios</h2>
                    <ul class="bread-list">
                    <li><NavLink to="/">Acceuil</NavLink></li>
                        <li><i class="icofont-simple-right"></i></li>
                        <li class="active">Portolios</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default breadcrumbsport