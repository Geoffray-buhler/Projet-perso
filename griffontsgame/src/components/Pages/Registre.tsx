import React from 'react';
import './AllPages.css';
import { Adresse,Port } from '../../services/UrlNPortServices';
import { Link } from 'react-router-dom';

class Registre extends React.Component {

    state={
        Login:'',
        Pseudo:'',
        Email:'',
        Password:'',
        Passwordbis:'',
        ErrMsg:'Les mots de passe ne sont pas les mêmes'
    }

    onRegister = () => {
            let body = JSON.stringify({
                pseudo: this.state.Pseudo,
                password: this.state.Password,
                login: this.state.Login,
                email: this.state.Email
            })
            fetch(`${Adresse}:${Port}/register`,{method:'POST',
                                                    body,
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    },
                                                    cache:'default'
                                                    })
    }

    handleChange = (event:any) => {
        const $inputEl: HTMLInputElement = event.target;
        const inputName: string = $inputEl.id;
        const inputValue: string = $inputEl.value;
        switch (inputName){
            case 'Login':
                this.setState({Login : inputValue})
            break
            case 'Pseudo':
                this.setState({Pseudo : inputValue})
            break
            case 'Email':
                this.setState({Email : inputValue})
            break
            case 'Password':
                this.setState({Password : inputValue})
            break
            case 'Passwordbis':
                this.setState({Passwordbis : inputValue})
            break
        }
    }

    onCompare = () => {
        if(this.state.Password !== "" && this.state.Password === this.state.Passwordbis && this.state.Pseudo !== "")
        {
            this.onRegister();
        }
        return (this.state.ErrMsg);
    }

    render(){
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-10 offset-1 custom-bg text-light d-flex flex-column">
                            <h1 className="mb-3">Création de compte</h1>
                            <input type="text" id="Pseudo" value={this.state.Pseudo} onChange={this.handleChange} className="mb-3 rounded" placeholder="Pseudo"></input>
                            <input type="text" id="Login" value={this.state.Login} onChange={this.handleChange} className="mb-3 rounded" placeholder="Nom de connection"></input>
                            <input type="text" id="Email" value={this.state.Email} onChange={this.handleChange} className="mb-3 rounded" placeholder="E-mail"></input>
                            <input type="password" id="Password" className="mb-3 rounded" value={this.state.Password} onChange={this.handleChange} placeholder="Mot de passe"></input>
                            <input type="password" id="Passwordbis" className="mb-3 rounded" value={this.state.Passwordbis} onChange={this.handleChange} placeholder="Remettre votre mot de passe"></input>
                            <Link className="btn btn-primary mr-2 mt-3 mb-2" onClick={this.onCompare} to="/">Créer</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registre;