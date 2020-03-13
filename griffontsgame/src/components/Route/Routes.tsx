import React from 'react';

import { Switch,BrowserRouter as Router,Route } from 'react-router-dom';

import Accueil from '../Pages/Accueil';
import Norage from '../Pages/Norage';
import Boss from '../Pages/Boss';
import SecondGames from '../Pages/SecondGames';
import CGU from '../Pages/CGU';
import Register from '../Pages/Registre';
import Apropos from '../Pages/Apropos';
import Contact from '../Pages/Contact';

const Routes = () =>{
    return(
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
                    <Register/>
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
          )
}

export default Routes;