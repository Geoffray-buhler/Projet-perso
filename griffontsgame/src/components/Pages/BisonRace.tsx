import React from 'react';
import '../../model/I_database_inteface.d.ts';
import './AllPages.css';
import { Adresse,Port } from '../../services/UrlNPortServices';


export default class Boss extends React.Component {
    state = {
        gamename: 'BisonRace',
        bodygame: '',
        screengame:'',
        linkgame:'',
        themegame:'',
    }

    componentDidMount(){
        this.getgame();
    }

    getgame(){
        let post = JSON.stringify({
            name: this.state.gamename,
        })
        fetch(`${Adresse}:${Port}/gameprinc/`,{method:'POST',
                                                body:post,
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                },
                                                cache:'default'})
            .then(res => res.json())
            .then(data =>{
                this.setState({
                bodygame: data[0].description,
                screengame:data[0].screenshot,
                linkgame:data[0].link,
                themegame:data[0].theme
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-12 custom-bg text-light">
                        <h1 className="mb-3">{this.state.gamename}</h1>
                        <h5 className="mb-3">{this.state.bodygame}</h5>
                        <label>Genre</label>
                        <h3 className="mb-3">{this.state.themegame}</h3>
                        <img className="screenshot" alt="" src={this.state.screengame}/><br></br>
                        <a href={this.state.linkgame} className="btn btn-primary mr-2 mt-3 mb-2 btn-font">Telechargement</a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}