import React from 'react'

function Contacter() {
  return (
    <section class="appointment" id='contact'>
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2>Nous contacter</h2>
							<p>Contactez-nous pour plus d'information sur GéoAr'Tech</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-6 col-md-12 col-12">
						<form class="form" action="#">
							<div class="row">
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
                                    <label for="exampleInputEmail1" class="form-label">Nom</label>
										<input name="Nom" type="text" placeholder="Nom"/>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
                                    <label for="exampleInputEmail1" class="form-label">Prénom</label>
										<input name="Prénom" type="text" placeholder="Prénom"/>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
                                    <label for="exampleInputEmail1" class="form-label">Email</label>
										<input name="Email" type="email" placeholder="Email"/>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
                                    <label for="exampleInputEmail1" class="form-label">Télephone</label>
										<input name="Telephone" type="text" placeholder="Phone"/>
									</div>
								</div>
								
								
								<div class="col-lg-12 col-md-12 col-12">
									<div class="form-group">
                                    <label for="exampleInputEmail1" class="form-label">Votre message</label>
										<textarea name="Votre message" placeholder="Tapez votre message....."></textarea>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-12 col-md-12 col-12">
									<div class="form-group">
										<div class="button">
											<button type="submit" class="btn">Envoyer</button>
										</div>
									</div>
								</div>
								<div class="col-lg-7 col-md-8 col-12">
								
								</div>
							</div>
						</form>
					</div>
					<div class="col-lg-6 col-md-12 ">
						<div class="appointment-image">
					
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}

export default Contacter