'use strict';

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('hello acamica!!!!!!')
})

const mysql      = require('mysql');
const host = (process.env.NODE_ENV && process.env.NODE_ENV === "debug") ? 'localhost' : "mysql-db";
const connection = mysql.createConnection({
  host     : host,
  user     : 'root',
  password : 'password',
  database : 'acamica-db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();

app.listen(3000, () => console.log('server listening on 3000! '));