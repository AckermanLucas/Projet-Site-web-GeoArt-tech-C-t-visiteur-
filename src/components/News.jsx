import React from 'react'

function News() {
  return (
    <section class="newsletter section">
    <div class="container">
        <div class="row ">
            <div class="col-lg-6  col-12">
           
                <div class="subscribe-text ">
                    <h6>Inscrivez-vous au Newsletter de GéoAr'Tech</h6>
                    <p class="">Ne rattez aucune information sur GeoAr'Tech en vous inscrivant<br/> au Newsletter.</p>
                </div>
            </div>
            <div class="col-lg-6  col-12">
               
                <div class="subscribe-form ">
                    <form action="mail/mail.php" method="get" target="_blank" class="newsletter-inner">
                        <input name="EMAIL" placeholder="Votre adresse Email" class="common-input" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Votre adresse Email'" required="" type="email"/>
                        <button class="btn btn-success">S'inscrire</button>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
    </section>
  )
}
export default News

