import React from 'react';

export default class Boss extends React.Component {
    state = {
        gamename: 'Boss Rush',
        bodygame: '',
        screengame:'',
        linkgame:'',
    }

    componentDidMount(){

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
            .then(data => this.setState({
                bodygame: data.body
            }))
    }

    render(){
        return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-light">
                        <h1 className="mb-3">Boss Rush</h1>
                        <h3 className="mb-3">petit jeu de Boss rush</h3>
                        <h3 className="mb-3">Tous ca tous ca !!!</h3>
                        <h3 className="mb-3">tester et commenter</h3>
                        <a href="" className="btn btn-bg-custom mr-2 mt-3 mb-2">Telechargement</a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}