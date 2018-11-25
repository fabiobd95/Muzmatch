// Grabs our environment variables from the .env file
require('dotenv').config();

var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cors = require('cors'),
    app = express();

// Environment configuration
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3000;

// Create a server side router
var router = express.Router();

// Configure express to handle HTTP requests
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
})); 
app.use(methodOverride());

var allComments= [
    {
        name: 'Fabio',
        comment: 'Good Video'
    },
    {
        name: 'Ryan',
        comment: 'Amazing!!!'
    },
    {
        name: 'Shahzad',
        comment: 'We have a lot of potential here!'
    },
    {
        name: 'Fabio',
        comment: 'Good Video'
    },
    {
        name: 'Ryan',
        comment: 'Amazing!!!'
    },
    {
        name: 'Shahzad',
        comment: 'We have a lot of potential here!'
    }
]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get all comments
router.get('/getComments', function(req, res){
 
    res.json({ error: false, comments: allComments });

});

// Get new Comment
router.get('/getNewComment', function(req, res){
    
    random = getRandomInt(0, allComments.length);
    res.json({ error: false, newComment: allComments[random] });

});

// Send Comment
router.post('/sendComment', function(req, res){

    allComments.push(req.body);
    res.json({ error: false });

});

// Register the router
app.use('/', router);

// Start the server
app.listen(port, function(){
    console.log('Server listening on port ' + port)
});