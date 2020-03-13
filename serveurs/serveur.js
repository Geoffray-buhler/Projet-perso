require('dotenv').config()
const express = require('express')
const app = express()

const mariadb = require('mariadb');

const bodyParser = require('body-parser');

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
    
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
extended: true
})); 

//Get a user with ID and return to client
app.post('/users', function(req, res){
    let conn;
    let login = req.body.login
    pooluser.getConnection()
        .then(_conn => {
            conn = _conn;
            console.log('Ok ! Connected!')
            conn.query("SELECT * FROM users WHERE Login = ?", [login] //prepare login variable
        )})
        .then(data => { 
            if (data){
                res.send(data)
            }
            res.send('utilisateur inconnue !')
        })
        .catch(err => {
            console.error(err);
            return('Paramètre de connection incorrecte');
        })
        .finally(() => {
            conn && conn.release();
        })
})

app.patch('/register', function(req,res){


    let conn;
    let Pseudo = req.body.Pseudo
    let Password = req.body.Password
    let Login = req.body.Login
    let E_mail = req.body.E_mail

    pooladmin.getConnection()
        .then(_conn => {
            conn = _conn;
            console.log('Ok ! Register OK !')
            conn.query("INSERT INTO users (Pseudo,Password,Login,E_mail) VALUES (?,?,?,?)",[Pseudo,Password,Login,E_mail])
        })
        .then(data => { 
            if (data){
                res.send(data)
            }
        })
})

app.listen(port, function(){
    console.log(`serveur ecoute le port ${port}!`)
})