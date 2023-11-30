import { React, ReactDOM } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyRouter from './router/index.js';
import Acceuil from './pages/Acceuil';
import { Component } from 'react';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			routeKey:1
		};
	}

	changeRoute(){
		this.setState(prevState =>({
			routeKey: prevState.routeKey + 1
		}));
	}
		render() {
	return (
		<div className='App' key={this.state.routeKey}>
		  <Navbar/>
	
		  <MyRouter/>
		  <Footer />
		  
		</div>
	);
		}
  };
  export default App;




