import React,{useState} from 'react';
import './AllPages.css';
import { Adresse,Port } from '../../services/UrlNPortServices';
import { Link } from 'react-router-dom';

const Modify = () => {

    const [state,setState] = useState({
        Login:'',
        Pseudo:'',
        Email:'',
        Password:'',
        Passwordbis:'',
        ErrMsg:'Les mots de passe ne sont pas les mêmes'
    })

    const onModify = () => {
            let body = JSON.stringify({
                pseudo: state.Pseudo,
                password: state.Password,
                email: state.Email
            })
            fetch(`${Adresse}:${Port}/modify`,{method:'POST',
                                                    body,
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    },
                                                    cache:'default'
                                                    })
    }

    const handleChange = (event:any) => {
        const $inputEl: HTMLInputElement = event.target;
        const inputName: string = $inputEl.id;
        const  inputValue: string = $inputEl.value;
        switch (inputName){
            case 'Login':
                setState({...state, Login: inputValue})
            break
            case 'Pseudo':
                setState({...state, Pseudo: inputValue})
            break
            case 'Email':
                setState({...state, Email: inputValue})
            break
            case 'Password':
                setState({...state, Password: inputValue})
            break
            case 'Passwordbis':
                setState({...state, Passwordbis: inputValue})
            break
        }
    }

    const onCompare = () => {
        if(state.Password !== "" && state.Password === state.Passwordbis && state.Pseudo !== "")
        {
            onModify();
        }
        return (state.ErrMsg);
    }
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-10 offset-1 custom-bg text-light d-flex flex-column">
                            <h1 className="mb-3">Modifier votre compte !</h1>
                            <input type="text" id="Pseudo" value={state.Pseudo} onChange={handleChange} className="mb-3 rounded" placeholder="Pseudo"></input>
                            <input type="text" id="Email" value={state.Email} onChange={handleChange} className="mb-3 rounded" placeholder="E-mail"></input>
                            <input type="password" id="Password" className="mb-3 rounded" value={state.Password} onChange={handleChange} placeholder="Mot de passe"></input>
                            <input type="password" id="Passwordbis" className="mb-3 rounded" value={state.Passwordbis} onChange={handleChange} placeholder="Remettre votre mot de passe"></input>
                            <Link className="btn btn-primary mr-2 mt-3 mb-2" onClick={onCompare} to="/">Modifier</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Modify;