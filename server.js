// server.js
// where your node app starts

// init project
var express = require('express');
var device = require('express-device');

var app = express();
app.use(device.capture());
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

var answer = {};
app.get('*', function(req, res){
  answer.Your_ipAddress = req.headers['x-forwarded-for'].substring(0, 10);
  var s = req.headers['user-agent'].indexOf('(');
  var e = req.headers['user-agent'].indexOf(')');
  answer.Your_Software = req.headers['user-agent'].substring(s + 1,e);
  answer.Your_Browser_Langauge = req.headers['accept-language'].substring(0,5);
  answer.You_are_using = req.device.type;
  res.writeHead(200, {'Content-Type': "application/json"})
  res.end(JSON.stringify(answer));
  
});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
