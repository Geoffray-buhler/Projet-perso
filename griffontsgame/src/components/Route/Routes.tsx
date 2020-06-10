import React from 'react';

import {Switch,Route} from 'react-router-dom';

import Accueil from '../Pages/Accueil';
import Norage from '../Pages/Norage';
import Boss from '../Pages/Boss';
import BisonRace from '../Pages/BisonRace';
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


const Routes = () =>{
    return(
            <Switch>
                <Route exact path="/Norage_Kart" component={Norage}/>
                <Route exact path="/Boss_Rush" component={Boss}/>
                <Route exact path="/bisonrace" component={BisonRace}/>
                <Route path="/Seconde_games/:gamename" component={SecondGames}/>
                <Route exact path="/NewGame" component={NewGame}/>
                <Route exact path="/modify" component={Modify}/>
                <Route exact path="/cgu" component={CGU}/>
                <Route exact path="/profil" component={Profils}/> 
                <Route exact path="/admin" component={Admin}/>
                <Route exact path="/enregistrement" component={Register}/>
                <Route exact path="/APropos" component={Apropos}/>
                <Route exact path="/Contact" component={Contact}/>
                <Route path="/404" component={L404}/>
                <Route exact path="/" component={Accueil}/>
                <Route component={L404}/>
          </Switch>
          )
}

export default Routes;