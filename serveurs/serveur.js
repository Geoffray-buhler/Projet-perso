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
const secret = 'mysecretsshhh';

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
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
    let isprincipal = req.body.isprincipal

    pooladmin.getConnection()
        .then(_conn => {
            conn = _conn;
            conn.query("INSERT INTO games (Title,Body,DownloadLink,ScreenShot,Principal) VALUE (?,?,?,?,?)",[gamename,gamebody,gamelink,gamescreen,isprincipal])
                .then
        })
        .catch(err => {
            console.error(err);
            return('Erreur a la creation du nouveau jeu');
        })
        .finally(() => {
            conn && conn.release();
        })
})

//Recupere juste le pseudo de tout les compte
app.post('/users',function(req,res){
    let conn;
    pooluser.getConnection()
        .then(_conn => {
            conn = _conn;
            conn.query("SELECT Pseudo, FROM users")
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


//Recuperer les utilisateurs avec leur ID et les renvoie au client
app.post('/user', express.json(), function(req, res){

    let conn;
    let login = req.body.login
    let psw = req.body.psw
    let hashedPsw;

    pooluser.getConnection()
        .then(_conn => {
            conn = _conn;
            conn.query("SELECT * FROM users WHERE Login = ?", [login])
                .then(data => {data.forEach(() => { 
                    hashedPsw = data[0].password
                    bcrypt.compare(psw, hashedPsw,(err,result) => {
                        if(err) {
                            console.log('bcrypt - error -', err);
                        } else {
                            console.log('bcrypt - result -', result);
                            res.send(data[0]);
                        }
                    })
                })
            ;})
        })
        .finally(() => {
            conn && conn.release();
        })
})

//Enregistrement d'un nouveau compte et l'ajoute dans la BDD
app.post('/register', function(req,res){

    let conn;
    let Pseudo = req.body.pseudo
    let Password = req.body.password
    let Login = req.body.login
    let E_mail = req.body.email
    let Acc = []
 
    pooladmin.getConnection()
        .then(_conn => {
            conn = _conn;
            conn.query("SELECT pseudo,email,login FROM users")
                .then(data => {
                    Acc = data;
                })
            if(Pseudo === Acc.pseudo || Login === Acc.login || E_mail === email){
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
                
        }
    )
})

app.post('/delete', function (req,res){
    let id = req.body.id
    let idtodel = req.body.idtodel

    if(id === idtodel){
        pooladmin.getConnection()
            .then(_conn =>{
                conn = _conn;
                conn.query("DELETE FROM `users` WHERE id= ?",[id])
                    .then(data => {
                        res.send('ton compte a etais éffacé')
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
})

//initialisation du token



// Permet d'ecouter le Port definit plus haut et de l'afficher sur les logs

app.listen(port, function(){
    console.log(`serveur ecoute le port ${port}!`)
})