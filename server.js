/////////////////////////////////////////////////////////
/////////////       Dependencies
////////////////////////////////////////////////////////
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var twilio = require('twilio');
var Firebase = require('firebase');

var app = express();
var port =3000;

var ref = new Firebase('https://support-text.firebaseio.com/numbers');

// Twilio Credentials 
var accountSid = ''; 
var authToken = ''; 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 

/////////////////////////////////////////////////////////
/////////////       Middleware
////////////////////////////////////////////////////////

app.use(express.static('public'));
///// app.use(bodyparser());      ------normal
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

var message = {
    "message": "Hello world"
}

/////////////////////////////////////////////////////////
/////////////       Endpoints
////////////////////////////////////////////////////////
app.get('/api/message', function (req, res) {
    return res.send({"message": "hello user!!!!"});
});
app.post('/api/receive_message', function (req, res) {
    console.log(req.body.message);
    res.send();
});

app.post('/api/send_text_message', function (req, res) {
    console.log(req.body.message);
//    request.post('https://' + accountSid + ':' + authToken + '@api.twilio.com/2010-04-01/Accounts/' + accountSid + '/messages.json')
    
    client.messages.create({ 
	to: "2395657035", 
	from: "+12393301952", 
	body: req.body.message,   
}, function(err, message) { 
	console.log(message.sid); 
});

    
    res.send();
});
 
app.listen(port, function () {
    console.log('Im watching you server 3000 @.@');
});


