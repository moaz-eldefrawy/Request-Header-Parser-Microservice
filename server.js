// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

var answer = {name: "moaz"};
app.get('*', function(req, res){
  console.log(req);
  answer.ipAddress = req.headers['x-forwarded-for'].substring(0, 10);
  var a = req.headers['user-agent']
  res.end(a.toStiing());
  
});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
