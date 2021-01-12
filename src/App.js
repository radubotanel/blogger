var bodyParser = require('body-parser');

const express = require('express');
var cors = require('cors');

var app = express();    

app.use(cors());
app.use(bodyParser.urlencoded({extended: true})) ;
app.use(bodyParser.json()) ;

const port = 4000;

var mysql = require('mysql');



app.post('/login', (req, res) => {
  
 // res.send('Hello World!')
 // res.redirect('/')

 var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blogger",
  mode: "no-cors"
});

  con.connect(function(err) {
    if (err) throw err;
    var sql1="SELECT id FROM user WHERE username = ? and password = ?";
    var valoare=[req.body.username, req.body.password];
    
    con.query(sql1,valoare, function(err, results) {
      //console.log(results.length)
        if(results.length===1){
          // console.log(results.length)
          // console.log(req.body.username);
          console.log("Am gasit");
          console.log(results[0].id);
          res.send({rez: 'true', 
              id: results[0].id}
          );

          // res.sendFile('http://localhost:3000/Home');
          // red.Redirect("/Home");
      
        }
      
    });
  });

 
});

app.post('/register', (req, res) => {
  // console.log(req.body.username);
// if(req.body.username && req.body.email && req.body.name && req.body.)
 

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blogger"
});

  con.connect(function(err) {
    if (err) throw err;
    var sql1="SELECT * FROM user WHERE username = ? ";
    var valoare=[req.body.username];
    
    con.query(sql1,valoare, function(err, results) {
      //console.log(results.length)
        if(results.length===0){
          // console.log(results.length)
        // console.log(req.body.username);
          
          var sql = "INSERT INTO user (username,email,password) VALUES ?";
          var VALUES=[[req.body.username,req.body.email,req.body.password]]
          con.query(sql,[VALUES], function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
          });
        }
      
    });
  });
});



app.post('/AddPost', (req, res) => {
  
  console.log(req.body.id);

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blogger",
    mode: "no-cors"
  });

  con.connect(function(err) {
    if (err) throw err;
    var sql1="INSERT INTO post (id_author,title,descriere,content) VALUES ?";
    var VALUES=[[req.body.id,req.body.titlu,req.body.descriere,req.body.postare]]
          con.query(sql1,[VALUES], function (err, result) {
            if (err) throw err;
            console.log("1 record inserted here");
            res.send({status: 'ok'})
          });

  });  
});


app.post('/home', (req, res) => {
  console.log(req.body.id)
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blogger",
    mode: "no-cors"
  });

  con.connect(function(err) {
    if (err) throw err;
      var sql = "Select * from post";
      //var VALUES=[[req.body.id,req.body.titlu,req.body.descriere,req.body.postare]]
      con.query(sql, function (err, result) {
        if (err) throw err;
           console.log(result);
           res.send(result);
      });
  });
});


app.post('/post', (req, res) => {
  console.log(req.body.id);
  console.log("merge")
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blogger"
  });

  con.connect(function(err) {
    if (err) throw err;
      var sql = "Select * from post where id=?";
      var VALUES=[[req.body.id]]
      con.query(sql,VALUES ,function (err ,result) {
        if (err) throw err;
           console.log(result);
           res.send(result);
      });
  });
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


