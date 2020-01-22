var mysql = require('mysql');

var con = mysql.createConnection({
    host:'localhost',
    user: 'Anton',
    password: '309013abraham'
});

con.connect(function(err){

    if (err) throw err;
    console.log('Connected to DB');
    con.query("CREATE DATABASE IF NOT EXISTS test", function(err, result){
        if (err) throw err;
        console.log('Database created');
    });

});;