import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-css-bootstrap-magic-2020-03-04.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Route/Routes';

import NavBar from './components/NavBar/NavBar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import AppContext, { AppState } from './components/AppContext';




export default class App extends React.Component {
 
  public state: Readonly<AppState>;

  constructor(props: any){
    super(props);

    this.state = {
      currentUser: null,
      currentId: null,
      addUser: () => {
  
      },
      // loginUser: this.loginUser
    };
  }

  // loginUser = (username: string, password: string) => {
  //   setTimeout(() => {
  //     this.setState({
  //       ...this.state,
  //       currentUser: {
  //         username,
  //       }
  //     })
  //   }, 100)
  // }

  render () {
    return (
      <Router>
        <AppContext.Provider value={this.state}>
          <Jumbotron></Jumbotron>
          <NavBar></NavBar>
          <Routes></Routes>
          <Footer></Footer>
        </AppContext.Provider>
      </Router>
    );
  }
}