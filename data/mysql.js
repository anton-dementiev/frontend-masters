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
       con.query("USE test; CREATE TABLE IF NOT EXISTS customers (" +
       "first_name VARCHAR(55) NOT NULL" +
        "last_name VARCHAR(55) NOT NULL" +
        "id TINYINT NOT NULL AUTO_INCREMENT" +
        "PRIMARY KEY(id)" + ")", 
        function(err, result){
             if (err) throw err;
             console.log(result);
        });
    });

});