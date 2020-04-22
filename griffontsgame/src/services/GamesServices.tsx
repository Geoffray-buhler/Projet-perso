import React from 'react';
import { AppDispatchContext } from './DispatcherContext';
import { Action } from '../model/I_database_inteface';
import { Adresse,Port } from '../services/UrlNPortServices';

export default class GameServices extends React.Component {
    dispatch!: React.Dispatch<Action>;
        
      //Fonction qui permet de charger mes fonction a la creation de mon composant 
      componentDidMount(){
        this.dispatch = this.context;
        this.getAllSecGame();
        this.getAllprimGame();
      }
    //Fonction 
    protected getAllprimGame(){
      fetch(`${Adresse}:${Port}/allgamespri/`,{method:'POST',
                                              headers: {'Content-Type':'application/json'},
                                              cache:'default'})
          .then(res => res.json())
          .then(data => this.dispatch({type:"PrimGamesLoaded",games:data}))
          .catch(err => console.log(err))
    }
    
    protected getAllSecGame(){
        fetch(`${Adresse}:${Port}/allgamessec/`,{method:'POST',
                                                headers: {
                                                    'Content-Type':'application/json'
                                                },
                                                cache:'default'})
            .then(res => res.json())
            .then(data => this.dispatch({type:"SecGamesLoaded",games:data}))
            .catch(err => console.log(err))
    }
    
      public render () {
        return (null
        );
      }
    }

GameServices.contextType = AppDispatchContext;