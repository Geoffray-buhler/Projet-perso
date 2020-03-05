import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-css-bootstrap-magic-2020-03-04.css';
import { Switch,BrowserRouter as Router,Route } from 'react-router-dom';
import Accueil from './components/Accueil';
import NavBar from './components/NavBar/NavBar';
import Jumbotron from './components/Jumbotron/Jumbotron';

const App = () => {
  return (
    <Router>
      <Jumbotron></Jumbotron>
      <NavBar></NavBar>
      <Switch>
        <Route path="/">
          <Accueil/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
