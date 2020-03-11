import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-css-bootstrap-magic-2020-03-04.css';

import { Switch,BrowserRouter as Router,Route } from 'react-router-dom';
import Accueil from './components/Pages/Accueil';
import Norage from './components/Pages/Norage';
import Boss from './components/Pages/Boss';
import SecondGames from './components/Pages/SecondGames';
import CGU from './components/Pages/CGU';
import Register from './components/Pages/Registre';
import Apropos from './components/Pages/Apropos';
import Contact from './components/Pages/Contact';

import NavBar from './components/NavBar/NavBar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';

export default class App extends React.Component {
  
  getUser = () => {

  }

  addUser = () => {
    
  }

  render () {
    return (
      <Router>
        <Jumbotron></Jumbotron>
        <NavBar></NavBar>
        <Switch>
          <Route path="/Norage_Kart">
            <Norage/>
          </Route>
          <Route path="/Boss_Rush">
            <Boss/>
          </Route>
          <Route path="/action-1">
            <SecondGames/>
          </Route>
          <Route path="/cgu">
            <CGU/>
          </Route>
          <Route path="/enregistrement">
            <Register functionAdd={this.addUser}/>
          </Route>
          <Route path="/APropos">
            <Apropos/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Accueil/>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    );
  }
}