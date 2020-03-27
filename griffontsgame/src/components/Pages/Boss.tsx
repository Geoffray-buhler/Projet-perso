import React from 'react';
import '../../model/I_database_inteface.d.ts';

export default class Boss extends React.Component {
    state = {
        gamename: 'Boss Rush',
        bodygame: '',
        screengame:'',
        linkgame:'',
    }

    componentDidMount(){
        this.getgame();
    }

    getgame(){

        let post = JSON.stringify({
            name: this.state.gamename,
        })

        fetch('http://localhost:3001/gameprinc/',{method:'POST',
                                                body:post,
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                },
                                                cache:'default'})
            .then(res => res.json())
            .then(data =>{
                console.log(data.body)
                this.setState({
                bodygame: data.body
            })})
            .catch(err => console.log(err))
    }

    render(){
        return(
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-light">
                        <h1 className="mb-3">{this.state.gamename}</h1>
                        <p className="mb-3">{this.state.bodygame}</p>
                        <img src={this.state.bodygame}/>
                        <a href={this.state.bodygame} className="btn btn-bg-custom mr-2 mt-3 mb-2">Telechargement</a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}