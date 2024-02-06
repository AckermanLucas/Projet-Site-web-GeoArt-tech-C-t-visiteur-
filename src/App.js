import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyRouter from './router/index.js';
//import { css } from '@emotion/react';
import Acceuil from './pages/Acceuil';
import { Component } from 'react';
import { ClipLoader } from 'react-spinners';

/*class App extends Component{
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
	// Function to simulate asynchronous operation
	fetchData = () => {
		this.setState({ loading: true });
	
		// Simulate an asynchronous operation (e.g., fetching data)
		setTimeout(() => {
		  this.setState({ loading: false });
		}, 2000); // Adjust the duration as needed
	  };
	
	  // Lifecycle method called before the component unmounts
	  componentWillUnmount() {
		// Trigger the loading animation when the component is about to unmount (e.g., changing the route/page)
		this.fetchData();
	  }
	
		render() {
			/*const override = css`
			display: block;
			margin: 0 auto;
			border-color: red;
		  `;

		  const [loading, setLoading] = useState(false);

		  useEffect(()=> {
			setLoading(true)
			setTimeout(()=> {
				setLoading(false)
			}, 8000)
		},[])

	

	return (
		<div className='App' key={this.state.routeKey}>
				<Navbar/>
				 {/* Conditional rendering based on the loading state }
				 {loading ? (
          <div className='loader'>
            <ClipLoader  size={150} color={'#123abc'} loading={loading} />
          </div>
        ) : (
          <>
				<MyRouter/>
				<Footer />
				</>
        )}
		</div>
	);
	
		}
  };
  export default App;*/

  class App extends Component {
	constructor() {
	  super();
	  this.state = {
		loading: false,
		routeKey: 1,
	  };
	}
  
	fetchData = () => {
	  this.setState({ loading: true });
  
	  setTimeout(() => {
		this.setState({ loading: false });
	  }, 8000);
	};
  
	componentWillUnmount() {
	  this.fetchData();
	}
  
	render() {
	  /*const override = css`
		display: block;
		margin: 0 auto;
		border-color: red;
	  `;
  
	  const loaderStyle = css`
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1000;
	  `;
  */
	  return (
		<div className='App' key={this.state.routeKey}>
		  <Navbar />
		  {this.state.loading && (
			<div>
			  <ClipLoader  size={150} color={'#123abc'} loading={this.state.loading} />
			</div>
		  )}
		  <MyRouter />
		  <Footer />
		</div>
	  );
	}
  }
  
  export default App;
				


