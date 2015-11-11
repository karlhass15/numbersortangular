var express = require("express");
var app = express();
var path = require('path');
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgress://localhost:5432/Angular Numbers';

app.set("port", process.env.PORT || 5000);




//do we use the object which is info or people/person/.....????????
app.get('/people', function(req, res) {
    var studentInfo = [];

    pg.connect(connectionString, function (err, client, done) {
        var query = client.query("SELECT id, name, location, number FROM people");

        query.on('row', function (row) {
            studentInfo.push(row);
        });

        query.on('end', function () {
            client.end();
            return res.json(studentInfo);
        });

        if (err) {
            console.log(err);
        }
    });
});




app.get("/*", function(req,res,next){
 //   console.log("Here is the asset I needs: " , req.params);
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file))
});

app.listen(app.get("port"), function(req,res,next){
    console.log("Listening on port: " + app.get("port"));
});

//module.exports = app;