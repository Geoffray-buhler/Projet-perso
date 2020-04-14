import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-css-bootstrap-magic-2020-03-04.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Route/Routes';

import NavBar from './components/NavBar/NavBar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import AppContext from './components/AppContext';
import {AppState} from './model/I_database_inteface';

export default class App extends React.Component {
 
  public state: Readonly<AppState>;

  constructor(props: any){
    super(props);

    this.state = {
      currentUser: null,
      currentId: null,
      gamename: "Darkandinavia Ball",
      btnTitleSec:[] as Array<AppState>,
      btnTitlePrim:[] as Array<AppState>,
    };
  }

  componentDidMount(){
    this.getAllSecGame();
    this.getAllprimGame();
  }

  ChangeNameGame(name:string){
    this.setState({gamename:name})
  }

protected getAllprimGame(){
  fetch('http://localhost:3001/allgamespri/',{method:'POST',
                                          headers: {'Content-Type':'application/json'},
                                          cache:'default'})
      .then(res => res.json())
      .then(data => this.setState({btnTitlePrim:data}, () => {console.log(this.state.btnTitlePrim)}))
      .catch(err => console.log(err))
}

protected getAllSecGame(){
    fetch('http://localhost:3001/allgamessec/',{method:'POST',
                                            headers: {
                                                'Content-Type':'application/json'
                                            },
                                            cache:'default'})
        .then(res => res.json())
        .then(data => this.setState({btnTitleSec:data}, () => {console.log(this.state.btnTitleSec)}))
        .catch(err => console.log(err))
}

  public render () {
    return (
      <Router>
        <AppContext.Provider value={this.state}>
          <Jumbotron></Jumbotron>
          <NavBar FuncGameName={() => this.ChangeNameGame(name)}></NavBar>
          <Routes></Routes>
          <Footer></Footer>
        </AppContext.Provider>
      </Router>
    );
  }
}