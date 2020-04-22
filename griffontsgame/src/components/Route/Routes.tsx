import React from 'react';

import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';

import Accueil from '../Pages/Accueil';
import Norage from '../Pages/Norage';
import Boss from '../Pages/Boss';
import SecondGames from '../Pages/SecondGames';
import CGU from '../Pages/CGU';
import Register from '../Pages/Registre';
import Apropos from '../Pages/Apropos';
import Contact from '../Pages/Contact';
import Profils from '../Pages/Profils';

const Routes = () =>{
    return(
            <Switch>
                <Route path="/Norage Kart">
                    <Norage/>
                </Route>
                <Route path="/Boss Rush">
                    <Boss/>
                </Route>
                <Route path="/Seconde games">
                    <SecondGames/>
                </Route>
                <Route path="/cgu">
                    <CGU/>
                </Route>
                <Route path="/profil"> 
                    <Profils/>
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