import React from 'react';
import './AllPages.css';
import { IDataBaseGames } from '../../model/I_database_inteface';
import {AppContext} from '../../services/AppContext';

export default class SecondeGames extends React.Component {

    context!: React.ContextType<typeof AppContext>;

    state = {
        infogame:[] as Array<IDataBaseGames>
    }

    componentDidMount(){
        this.getSecGame();
    }

    getSecGame(){
        let body = JSON.stringify({
            gamename:this.context.gamename
        })
        fetch('http://localhost:3001/gamesecond/',{method:'POST',
                                                    body,
                                                    headers: {
                                                        'Content-Type':'application/json'
                                                    },
                                                    cache:'default'})
      .then(res => res.json())
      .then(data => this.setState({infogame:data}))
      .catch(err => console.log(err))
    }

    public render(){
        if (this.state.infogame.length === 0){
            return(
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-12 custom-bg text-light">
                            <div className="spinner-border text-info" role="status">
                                <span className="sr-only">Chargement...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }else{
            let altdesc = `Screenshot du jeux actuelle: ${this.state.infogame[0].title}`;
            return (
                <div className="App">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 custom-bg text-light">
                                <h1 className="mb-3">{this.state.infogame[0].title}</h1>
                                <h3 className="mb-3">Jeu crée en 2 heures en stream sur le thème de {this.state.infogame[0].theme}</h3>
                                <h3 className="mb-3">{this.state.infogame[0].description}</h3>
                                <img className="mb-3" alt={altdesc} src={this.state.infogame[0].screenshot}></img><br></br>
                                <a className="btn btn-danger mr-2 mt-3 mb-2" href={this.state.infogame[0].link}>Telechargement</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        };
    }
}

SecondeGames.contextType = AppContext;