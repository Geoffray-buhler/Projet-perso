import React from 'react';

import {Switch,BrowserRouter as Router,Route, Redirect} from 'react-router-dom';

import Accueil from '../Pages/Accueil';
import Norage from '../Pages/Norage';
import Boss from '../Pages/Boss';
import SecondGames from '../Pages/SecondGames';
import CGU from '../Pages/CGU';
import Register from '../Pages/Registre';
import Apropos from '../Pages/Apropos';
import Contact from '../Pages/Contact';
import Profils from '../Pages/Profils';
import Admin from '../Pages/Admin';
import NewGame from '../Pages/NewGame';
import Modify from '../Pages/Modify';
import L404 from '../Pages/404';
import SecondeGames from '../Pages/SecondGames';

const routes = [
    {
        path: '?...',
        component: () =>{}
    }
]

const Routes = () =>{
    return(
            <Switch>
                <Route path="/Norage Kart" component={Norage}/>
                <Route path="/Boss Rush" component={Boss}/>
                <Route path="/Seconde games" component={SecondeGames}/>
                <Route path="/NewGame" component={NewGame}/>
                <Route path="/modify" component={Modify}/>
                <Route path="/cgu" component={CGU}/>
                <Route path="/profil" component={Profils}/> 
                <Route path="/admin" component={Admin}/>
                <Route path="/enregistrement" component={Register}/>
                <Route path="/APropos" component={Apropos}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/404" component={L404}/>
                <Route exact path="/" component={Accueil}/>
                <Route component={L404}/>
          </Switch>
          )
}

export default Routes;