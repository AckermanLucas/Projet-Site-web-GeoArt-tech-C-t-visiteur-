import React from 'react'
import informatiques from './informatiques.jpg';

const color = {
    color: '#02b653', 
  };

function Actual() {
  return (
    <section class="blog section" id="actualite">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2 style={color}>actualités</h2>
							
							<p>Consultez les dernières actualités sur GéoAr'Tech</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-md-6 col-12">
					
						<div class="single-news">
							<div class="news-head">
								<img src={informatiques} alt=""/>
							</div>
							<div class="news-body">
								<div class="news-content">
									<div class="date">22 Aug, 2020</div>
									<h2><a href="">We have annnocuced our new product.</a></h2>
									<p class="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-12">
						<div class="single-news">
							<div class="news-head">
							<img src={informatiques} alt=""/>
							</div>
							<div class="news-body">
								<div class="news-content">
									<div class="date">15 Jul, 2020</div>
									<h2><a href="">Top five way for solving teeth problems.</a></h2>
									<p class="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-12">
					
						<div class="single-news">
							<div class="news-head">
							<img src={informatiques} alt=""/>
							</div>
							<div class="news-body">
								<div class="news-content">
									<div class="date">05 Jan, 2020</div>
									<h2><a href="">We provide highly business soliutions.</a></h2>
									<p class="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
								</div>
							</div>
						</div>
					
					</div>
					
				</div>
			</div>
		</section>
  )
}

export default Actual



