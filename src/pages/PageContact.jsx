import React from 'react'
import { useRoutes } from 'react-router-dom';
import Breadcrumbsctc from '../components/breacrumbsctc';
function PageContact() {

	
  return (
<div>

<div>   
    <Breadcrumbsctc/>
    <section class="contact-us section">
    <div class="container">
        <div class="inner">
            <div class="row"> 
                <div class="col-lg-6">
                    <div class="contact-us-left">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="contact-us-form">
                        <h2>Nous contacter</h2>
                        <p>Si vous voulez nous contacter veuillez ecrire votre informations ci-dessous. </p>
                        
                        <form class="form" method="post" action="mail/mail.php">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input type="text" name="name" placeholder="Nom" required=""/>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input type="email" name="email" placeholder="Adresse email" required=""/>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input type="text" name="phone" placeholder="Telephone" required=""/>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input type="text" name="subject" placeholder="Sujet" required=""/>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <textarea name="message" placeholder="Votre message" required=""></textarea>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group login-btn">
                                        <button class="btn" type="submit">Envoyer</button>
                                    </div>
                                    <div class="checkbox">
                                        <label class="checkbox-inline" for="2"><input name="news" id="2" type="checkbox"/>Voulez vous s'inscrire dans notre Newsletter ?</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact-info">
            <div class="row">
                <div class="col-lg-4 col-12 ">
                    <div class="single-info">
                        <i class="icofont icofont-ui-call"></i>
                        <div class="content">
                            <h3>+261 38 58 764 94</h3>
                            <p>Info_services@geoar-tech.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-12 ">
                    <div class="single-info">
                        <i class="icofont-google-map"></i>
                        <div class="content">
                            <h3>Andrainjato</h3>
                            <p>Fianarantsoa</p>
                        </div>
                    </div>
                </div>
           
         
            </div>
        </div>
    </div>
</section>
</div>

</div>   

  )
}

export default PageContact