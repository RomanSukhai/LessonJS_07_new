var express =  require("express");
var bodyJason = require('body-parser')

var server = express();
var JasonParser = bodyJason.json();
server.use(express.static(__dirname));
server.use(JasonParser);
server.get('/userGet',function (request,respond) {
    console.log(request.query);
    var obj  = request.query;
    respond.send('You have secsessful send Get method'+JSON.stringify(request.query))
})
server.listen(3000)
