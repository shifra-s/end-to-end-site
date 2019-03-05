// const app = require('express')();
const express = require('express');
const cors = require('cors');
const PORT = 8888;
const app = express();
var mysql = require('mysql');
app.use(express.json());


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'end-to-end'
});

app.use(cors());

connection.connect(function(e,d){
    if (e) console.log(e);
    console.log('con success');
})

//insert contact into table table
app.post('/contact', function (req, res) {
        let post = req.body;
        console.log(post)
        let sql ="INSERT INTO contact SET ?"
        connection.query(sql, post, function (err, result, fields) {
            if (err) throw err;

            res.send(result);
           
        })
});

app.get('/', function (req, res) {
        let sql ="SELECT * FROM contact"
        console.log(sql);
        connection.query(sql, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
    })
});

//get recipes from table
app.get('/recipes', function (req, res) {
        let sql ="SELECT * FROM recipe"
        console.log(sql);
        connection.query(sql, function (err, result, fields) {
            if (err) throw err;
            
            res.send(result);
            
    })
});

//insert recipe into recipe table
app.post('/recipes', function (req, res) {
        let post = req.body;

        console.log(post)
        let sql ="INSERT INTO recipe SET ?"
        connection.query(sql, post, function (err, result) {
            if (err) throw err;
            
            res.json(result);
            
        })
});

app.listen(PORT, function(){
    console.log('server start at port ' + PORT);
})