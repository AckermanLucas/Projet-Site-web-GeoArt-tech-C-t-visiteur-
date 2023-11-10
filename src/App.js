import { React, ReactDOM } from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Pres from './components/Pres';
import Actual from './components/Actual';
import Footer from './components/Footer';
import Offre from './components/Offre';
import Partenaires from './components/Partenaires';
import News from './components/News';
import Overlay from './components/Overlay';


import {BrowserRouter as Router, Switch, Route} from 
'react-router-dom';

function App() {
  return (
		<div className='App'>
				<Navbar/>
				<Slider/>
				<Pres/>
				<Actual/>
				<Offre/>
				<Overlay/>
				<News/>
				<Footer/>
		
		</div>
  );
}

export default App;


