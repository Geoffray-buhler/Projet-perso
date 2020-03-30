require('dotenv').config()
const express = require('express')
const app = express()

const mariadb = require('mariadb');

const pooluser = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER_USER,
    password: process.env.DB_PASSWORD_USER,
    database: process.env.DB_BDD
})

const pooladmin = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER_ADMIN,
    password: process.env.DB_PASSWORD_ADMIN,
    database: process.env.DB_BDD
})

const port = process.env.DB_PORT;

//Disable CORP
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
});
    
app.use(express.json() );       // to support JSON-encoded bodies

//Get a user with ID and return to client
app.post('/user', express.json(), function(req, res){

    let conn;
    let login = req.body.login
    let psw = req.body.psw

    pooluser.getConnection()
    
        .then(_conn => {

            conn = _conn;
            console.log('Ok ! Connected!')
            conn.query("SELECT * FROM users WHERE Login = ? AND Password = ?", [login, psw] //prepare login and password variable 
            )
            .then(data => { 
                if (data.length === 0){
                    res.send('utilisateur inconnue !')
                }else {
                    res.send(data)
                }
                
            })
            .catch(err => {
                console.error(err);
                return('Paramètre de connection incorrecte');
            })
    
            .finally(() => {
                conn && conn.release();
            })
        })
})

//Register a new account and add this to BDD
app.post('/register', function(req,res){

    let conn;
    let Pseudo = req.body.pseudo
    let Password = req.body.password
    let Login = req.body.login
    let E_mail = req.body.email

    pooladmin.getConnection()

        .then(_conn => {
            conn = _conn;
            console.log('Ok ! Register OK !')
            conn.query("INSERT INTO users (pseudo,password,login,email) VALUES (?,?,?,?)",[Pseudo,Password,Login,E_mail])
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
        })

       
})

//Get all game 
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

//Get just a pseudo of all account
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

//Get Principal Game
app.post('/gameprinc', function(req,res){
    let conn;
    let Gamename = req.body.name

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

//Get secondary Game
app.post('/game', function(req,res){
    let conn;
    let gamename = req.body.gamename

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

//Add new game in BDD
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


app.listen(port, function(){
    console.log(`serveur ecoute le port ${port}!`)
})