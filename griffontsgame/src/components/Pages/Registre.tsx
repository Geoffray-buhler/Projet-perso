import React from 'react';

class Registre extends React.Component {

    constructor(props:any){
        super(props);
    }

    state={
        Password:'',
        Passwordbis:'',
        Login:'',
        Pseudo:'',
        Email:'',
        ErrMsg:'Les mots de passe ne sont pas les même'
    }

    onRegister = () => {
            let bodyReg = JSON.stringify({
                pseudo: this.state.Pseudo,
                password: this.state.Password,
                login: this.state.Login,
                email: this.state.Email})

            fetch('http://localhost:3001/register/',{method:'PATCH',
                                                    mode:'no-cors',
                                                    body:bodyReg,
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    },
                                                    cache:'default'})
        }

    handleChange(event:any) {
        const $inputEl: HTMLInputElement = event.target;
        const inputName: string = $inputEl.id;
        const inputValue: string = $inputEl.value;
        const patchState = {
            [inputName]: inputValue
        };

        this.setState(patchState);
    }

    onCompare = () => {
        if(this.state.Password != "" && this.state.Password === this.state.Passwordbis && this.state.Pseudo != "")
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
                        <div className="col-10 offset-1 text-light d-flex flex-column">
                            <h1 className="mb-3">Création de compte</h1>
                            <h3 id='errDiv' className="text-red"></h3>
                            <input type="text" id="Pseudo" value={this.state.Pseudo} onChange={this.handleChange} className="mb-3 rounded" placeholder="Pseudo"></input>
                            <input type="text" id="Login" value={this.state.Login} onChange={this.handleChange} className="mb-3 rounded" placeholder="Nom de connection"></input>
                            <input type="text" id="Email" value={this.state.Email} onChange={this.handleChange} className="mb-3 rounded" placeholder="E-mail"></input>
                            <input type="password" id="Password" className="mb-3 rounded" value={this.state.Password} onChange={this.handleChange} placeholder="Mot de passe"></input>
                            <input type="password" id="Passwordbis" className="mb-3 rounded" value={this.state.Passwordbis} onChange={this.handleChange} placeholder="Remettre votre mot de passe"></input>
                            <a className="btn btn-danger mr-2 mt-3 mb-2" onClick={this.onCompare}>Crées</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registre;