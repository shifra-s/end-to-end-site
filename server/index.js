// const app = require('express')();
const express = require('express');
const cors = require('cors');
const PORT = 8888;
const app = express();
var mysql = require('mysql');
app.use(express.json);


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'end-to-end'
});

app.use(cors());

//insert contact into table table
app.post('/contact', function (req, res) {
    connection.connect(function (err) {
        let post = req.body;
        let sql ="INSERT INTO students(`name`,`email`,`phone`) VALUES?"
        if (err) throw err;
        connection.query(sql, post, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
            //end connection
            connection.end();
        })
    })
});

app.listen(PORT, function(){
    console.log('server start at port ' + PORT);
})