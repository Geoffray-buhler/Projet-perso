import React from 'react';

class Registre extends React.Component <{ functionAdd:any }> {
    state={
        password:'',
        passwordbis:'',
        value:''
    }

    handleChange(event:any) {
        this.setState({value: event.target.value});
      }

    makeAJson = () => {
        let Pseudo;
        let Login;
        let Email;
        let passwordok = this.compare();
    }

    compare = () => {

    }

    render(){
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-10 offset-1 text-light d-flex flex-column">
                            <h1 className="mb-3">Création de compte</h1>
                            <input type="text" id="Pseudo" className="mb-3 rounded" placeholder="Pseudo"></input>
                            <input type="text" id="Login" className="mb-3 rounded" placeholder="Nom de connection"></input>
                            <input type="text" id="Email" className="mb-3 rounded" placeholder="E-mail"></input>
                            <input type="password" id="Motdepasse" className="mb-3 rounded" value={this.state.value} onChange = {this.handleChange } placeholder="Mot de passe"></input>
                            <input type="password" id="Motdepassebis" className="mb-3 rounded" placeholder="Remettre votre mot de passe"></input>
                            <a className="btn btn-danger mr-2 mt-3 mb-2" onClick={this.makeAJson}>Crées</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registre;