//Fonction de check pour le token 

const checkToken = (token) => {
    if (token) {
        try{
            token = token.split(' ');
            if(token[0] === 'Bearer'){
                token = jwt.verify(token[1],secret);
                return(token)
            }return("il y a un problème avec le token")
        } catch(err) {
            return(null)
        }  
    } 
}  

//Utilisation du DovEnv qui permet de sortir les variable d'environement

require('dotenv').config()

//Const pour express et mariaDB
const express = require('express');
const app = express();
const mariadb = require('mariadb');

//Bcrypt Const
const bcrypt = require('bcrypt');
const salt = 10;

//Token
const jwt = require('jsonwebtoken');
const secret = '8@%Tp>RNKCH5S9*:Z7CG*r8,287!3Z57Xe<yj},x@7LU8i7awy2Z)kVEgM^Wb3Y4F3ya38^U7mdXda9m6|=Y)jJ95~/}!_yxy,4yZ[p'; 

//Const de connextion a la base de données pour les utilisateurs
const pooluser = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER_USER,
    password: process.env.DB_PASSWORD_USER,
    database: process.env.DB_BDD
})

//Const de connextion a la base de données pour les administrateurs
const pooladmin = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER_ADMIN,
    password: process.env.DB_PASSWORD_ADMIN,
    database: process.env.DB_BDD
})

//Const pour le choix du ports
const port = process.env.SERVER_PORT;

//Desactiver le CORP
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
});
    
app.use(express.json() );       // pour accepter les corps en JSON-encoded

//Recupere tout les jeux 

app.post('/allgames', function(req,res){
    let conn;
    pooluser.getConnection()
        .then(_conn => {
            conn = _conn;
            conn.query("SELECT * FROM games")
                .then(data => {
                    res.send(data)
                })
        })
        .catch(err => {
            console.error(err);
            return('Erreur a la connection');
        })
        .finally(() => {
            conn && conn.release();
        })
})

//permet de Modifier les infos d'utilisateur dans la BDD

app.post('/modify', function(req,res){

    let conn;
    let Pseudo = req.body.pseudo
    let Password = req.body.password
    let E_mail = req.body.email
    let Id = req.body.id
    let token = req.headers.authorization
    let check = checkToken(token)

    if(check != null){
        pooladmin.getConnection()
            .then(_conn => {
                conn= _conn;
                conn.query("UPDATE users SET pseudo = ?,password = ?, email = ? WHERE id = ? "[Pseudo],[Password],[E_mail], [Id])
            })
            .catch(err =>{
                console.error(err);
                res.send("Mise a jour impossible !")
            })
            .finally(() => {
                conn & conn.release();
            })
    }
})

//Recupere tout les jeux secondaire

app.post('/allgamessec',function(req,res){
    let conn;
    console.log('Connecter ! allgamessec')
    pooluser.getConnection()
        .then(_conn => {
            conn = _conn;
            conn.query("SELECT * FROM games WHERE principal = '0'")
                .then(data => {
                    res.send(data)
                })
        })
        .catch(err => {
            console.error(err);
            return('Erreur a la connection');
        })
        .finally(() => {
            conn && conn.release();
        })
})

//Recupere tout les jeux primaire

app.post('/allgamespri',function(req,res){
    let conn;
    console.log('Connecter ! allgamespri')
    pooluser.getConnection()
        .then(_conn => {
            conn = _conn;
            conn.query("SELECT * FROM games WHERE principal = '1'")
                .then(data => {
                    res.send(data)
                })
        })
        .catch(err => {
            console.error(err);
            return('Erreur a la connection');
        })
        .finally(() => {
            conn && conn.release();
        })
})

//Recupere un jeux principal

app.post('/gameprinc', function(req,res){
    let conn;
    let Gamename = req.body.name
    console.log('Connecter ! gameprinc')
    pooluser.getConnection()
        .then(_conn => {
            conn = _conn;
            conn.query("SELECT * FROM games WHERE Title = ? AND principal = '1'", [Gamename])
                .then(data => {
                    res.send(data)
                })
        })
        .catch(err => {
            console.error(err);
            return('Erreur a la connection');
        })
        .finally(() => {
            conn && conn.release();
        })
})

//Recupere un jeux secondaire

app.post('/gamesecond', function(req,res){
    let conn;
    let gamename = req.body.gamename
    console.log('Connecter ! gamesecond')
    pooluser.getConnection()
        .then(_conn => {
            conn = _conn;
            conn.query("SELECT * FROM games WHERE title = ? AND Principal = '0'",[gamename])
                .then(data => {
                    res.send(data)
                })
        })
        .catch(err => {
            console.error(err);
            return('Erreur a la connection');
        })
        .finally(() => {
            conn && conn.release();
        })
})

//Ajout un nouveau jeux dans la BDD

app.post('/newgame',function(req,res){
    let conn;
    let gamename = req.body.gamename
    let gamebody = req.body.gamebody
    let gamelink = req.body.gamelink
    let gamescreen = req.body.gamescreen
    let gametheme = req.body.gametheme
    let isprincipal = req.body.isprincipal
    let token = req.headers.authorization
    let check = checkToken(token)

    if(check != null) {
        if(check.roles === "admin"){
            pooladmin.getConnection()
                .then(_conn => {
                    conn = _conn;
                    conn.query("INSERT INTO games (title,description,theme,link,screenshot,principal) VALUE (?,?,?,?,?,?)",
                    [gamename,gamebody,gametheme,gamelink,gamescreen,isprincipal]
                    )
                .then(data => {
                    res.send("Jeux crée !")
                })
                })
                .catch(err => {
                    console.error(err);
                    return('Erreur a la creation du nouveau jeu');
                })
                .finally(() => {
                    conn && conn.release();
                })
        }
    }
})

//Recupere juste le id,pseudo,email,roles de tout les compte


    app.post('/users',function(req,res){
        let token = req.headers.authorization
        let check = checkToken(token)
        let conn;

        if(check != null){
            if(check.roles === "admin"){
                pooluser.getConnection()
                    .then(_conn => {
                        conn = _conn;
                        conn.query("SELECT id,pseudo,email,roles FROM users")
                            .then(data => {
                                res.send(data)
                            })
                    })
                    .catch(err => {
                        console.error(err);
                        return('Erreur a la connection');
                    })
                    .finally(() => {
                        conn && conn.release();
                    })
            }
        }
    })



//Recuperer un utilisateur avec leur ID et les renvoie au client avec un token

app.post('/user', express.json(), function(req, res){

    let conn;
    let login = req.body.login
    let psw = req.body.psw
    let hashedPsw;
    let token = req.headers.authorization
    let check = checkToken(token)

    if (check != null){
        pooluser.getConnection()
            .then(_conn => {
                conn = _conn;
                conn.query("SELECT * FROM users WHERE Login = ?", [check.login])
                    .then(data => res.send(data))
            })
    }else{
    pooluser.getConnection()
        .then(_conn => {
            conn = _conn;
            conn.query("SELECT * FROM users WHERE Login = ?", [login])
                .then(data => {data.forEach(() => { 
                    hashedPsw = data[0].password
                    const token = jwt.sign({
                        login: data[0].login,
                        roles: data[0].roles,
                        id: data[0].id
                    },secret, { expiresIn:'7d' });
                    bcrypt.compare(psw, hashedPsw,(err,result) => {
                        if(err) {
                            console.log('bcrypt - error -', err);
                        } else {
                            console.log('bcrypt - result -', result);
                            let Responce = ({data:data[0],token:token})
                            res.send(Responce);
                        }
                    })
                })
            ;})
        })
        .finally(() => {
            conn && conn.release();
        })
    }
})

//Enregistrement d'un nouveau compte et l'ajoute dans la BDD

app.post('/register', function(req,res){

    let conn;
    let Pseudo = req.body.pseudo;
    let Password = req.body.password;
    let Login = req.body.login;
    let E_mail = req.body.email;
    let Acc = [];
    let token = req.headers.authorization
    let check = checkToken(token)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
 
    if (check != null){
        pooladmin.getConnection()
            .then(_conn => {
                conn = _conn;
                conn.query("SELECT * FROM users")
                    .then(data => {
                        Acc = data;
                    })
                    .then (() => {if(Pseudo === Acc.pseudo || Login === Acc.login || E_mail === Acc.email){
                        res.send('compte deja existant')
                    }
                        bcrypt.hash(Password,salt)
                        .then(function(hash){
                            conn.query("INSERT INTO users (pseudo,password,login,email) VALUES (?,?,?,?)",[Pseudo,hash,Login,E_mail])
                                .then(data => {
                                    if (data){
                                        res.send(data)
                                    }
                                })
                                .catch(err => {
                                    console.error(err);
                                    return('Erreur a la creation du compte');
                                })
                                .finally(() => {
                                    conn && conn.release();
                                })
                        });
                    })
                    
            }
        )
    }
})

//Fonction qui permet de supprimer completement et en cascade un utilisateur soit par l'admin soit par l'utilisateur aussi

app.post('/delete', function (req,res){
    let login = req.body.login
    let id = req.body.id
    let token = req.headers.authorization
    if(token){
        let data = checkToken(token)
        if(login === data.login && id === data.id){
            pooladmin.getConnection()
                .then(_conn =>{
                    conn = _conn;
                    conn.query("DELETE FROM `users` WHERE id= ?",[id])
                        .then(data => {
                            res.send('Ton compte a etais éffacé')
                        })
                        .catch(err => {
                            console.error(err);
                            return(`Erreur lors du l'effacement du compte`);
                        })
                        .finally(() => {
                            conn && conn.release();
                        })
                });
        }
    }
})

app.post('/admin',function (req,res){
    let token = req.headers.authorization
    if(token){
        let data = checkToken(token)
        if (data.roles === "admin"){
            res.status(200).send('1');
        }else{
            res.status(401).send('0');
        }   
    } else{
        res.status(401).send('0');
    }
})

// Permet d'ecouter le Port definit plus haut et de l'afficher dans la console

app.listen(port, function(){
    console.log(`serveur ecoute le port ${port}!`)
})