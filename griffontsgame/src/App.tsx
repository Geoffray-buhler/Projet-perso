import React, { useContext } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-css-bootstrap-magic-2020-03-04.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Route/Routes';

import NavBar from './components/NavBar/NavBar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import AppContext from './components/AppContext';
import {appReducer,AppDispatchContext} from './components/DispatcherContext';
import {AppState} from './model/I_database_inteface';

export default class App extends React.Component {
 
  public state: Readonly<AppState>;

  constructor(props: any){
    super(props);

    this.state = {
      currentUser: null,
      currentId: null,
      gamename: "",
      btnTitleSec:[] as Array<AppState>,
      btnTitlePrim:[] as Array<AppState>
    };
  }

  
// Provider principal du modèle de notre app
// Simplement un wrapper permettant de déclarer les contextes nécéssaires
// Et lier l'ensemble state, dispatch, reducer et state par défaut.
// Typiquement utilisé ici comme première balise de notre app, englobant l'ensemble
  AppProvider({children}) {
  const [state, dispatch] = React.useReducer(appReducer, {activeGame: ''})
  return (
      <AppContext.Provider value={state}>
        <AppDispatchContext.Provider value={dispatch}>
          {children}
        </AppDispatchContext.Provider>
      </AppContext.Provider>
    )
  }

  //Fonction qui permet de charger mes fonction a la creation de mon composant 
  componentDidMount(){
    this.getAllSecGame();
    this.getAllprimGame();
    this.MsgCustom();
  }

  //Petite fonction pour surprendre les gens qui vont voir le code ^^
  protected MsgCustom(){
    console.log("%cCalmez-Vous ❤️","font-size:40px;")
  }

  // Notre reducer. Ici il est responsable de toute l'app
  // (c'est p-e beaucoup, mais l'app reste assez reduite donc pkoi pas)
  // Il est appelé lorsqu'une action est émise par un dispatcher
  // Il utilise les informations de cette action pour mettre à jour le state
  appReducer(state, action) {
    switch (action.type) {
      case 'change-game': {
        return {activeGame: action.newGame}
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
  }

protected getAllprimGame(){
  fetch('http://localhost:3001/allgamespri/',{method:'POST',
                                          headers: {'Content-Type':'application/json'},
                                          cache:'default'})
      .then(res => res.json())
      .then(data => this.setState({btnTitlePrim:data}))
      .catch(err => console.log(err))
}

protected getAllSecGame(){
    fetch('http://localhost:3001/allgamessec/',{method:'POST',
                                            headers: {
                                                'Content-Type':'application/json'
                                            },
                                            cache:'default'})
        .then(res => res.json())
        .then(data => this.setState({btnTitleSec:data}))
        .catch(err => console.log(err))
}

  public render () {
    return (
      <Router>
        <AppContext.Provider value={ this.state }>
          <Jumbotron></Jumbotron>
          <NavBar></NavBar>
          <Routes></Routes>
          <Footer></Footer>
        </AppContext.Provider>
      </Router>
    );
  }
}