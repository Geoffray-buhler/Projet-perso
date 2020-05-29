import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-css-bootstrap-magic-2020-03-04.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Route/Routes';

import NavBar from './components/NavBar/NavBar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import {AppContext} from './services/AppContext';
import {appReducer,AppDispatchContext} from './services/DispatcherContext';
import GameServices from './services/GamesServices';

// Provider principal du modèle de notre app
// Simplement un wrapper permettant de déclarer les contextes nécéssaires
// Et lier l'ensemble state, dispatch, reducer et state par défaut.
// Typiquement utilisé ici comme première balise de notre app, englobant l'ensemble
  const AppProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(appReducer, {currentUser: null,
                                                          currentId: null,
                                                          currentToken:null,
                                                          gamename: "",
                                                          btnTitleSec:[],
                                                          btnTitlePrim:[]})
  return (
      <AppContext.Provider value={state}>
        <AppDispatchContext.Provider value={dispatch}>
          {children}
        </AppDispatchContext.Provider>
      </AppContext.Provider>
    )
  }

const App = () => {

  //Fonction qui permet de charger mes fonction a la creation de mon composant 
  const componentDidMount = () => {
    localStorage.getItem('tokenVal');
    MsgCustom();
  }

  //Petite fonction pour surprendre les gens qui vont voir le code ^^
  const MsgCustom = () => {
    console.log("%cCalmez-Vous ❤️","font-size:40px;color:#ff0000;background-color:#000000;border-radius:10px;padding:2rem;")
  }
  componentDidMount();
    return (
      <Router>
        <AppProvider>
          <GameServices/>
          <Jumbotron></Jumbotron>
          <NavBar></NavBar>
          <Routes></Routes>
          <Footer></Footer>
        </AppProvider>
      </Router>
    );
}

export default App