// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

// var db = require('./models');

var bikeRides = [
  {_id: 0, name: "Hawk Hill", lengthMiles: 22, elevationGainFeet: 1762, stravaLink: "https://www.strava.com/routes/4104988"},
  {_id: 1, name: "Paradise Loops", lengthMiles: 43.5, elevationGainFeet: 2323, stravaLink: "https://www.strava.com/routes/7852366"}
]

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  res.json({
    message: "Welcome to my bike ride API! Here's what you need to know!",
    documentationUrl: "TBD on Github",
    baseUrl: "TBD on herokuapp",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints for this bike ride API"},
      {method: "GET", path: "/api/profile", description: "Provides information about me"},
      {method: "GET", path: "/api/routes", description: "Shows all bike routes"},
      {method: "POST", path: "/api/route", description: "Create a new route"},
      {method: "PUT", path: "/api/route/:id", description: "Update an existing route"},
      {method: "DELETE", path: "/api/route/:id", description: "Delete an existing route"}
    ]
  })
});

// profile route
app.get('/api/profile', function apiIndex(req, res) {
  res.json({
    name: "Beth Witten",
    picture: "https://avatars1.githubusercontent.com/u/30534735?v=4&s=400&u=a38445bfe8f3c8675397a01068c694a7719c21c5",
    githubLink: "https://github.com/brwitten",
    personalSite: "https://brwitten.github.io/",
    currentCity: "San Francisco, CA",
    pets: [{currentNumber: 0, futureNumber: "> 0 (hopefully)"}]
  });
});

// Shows all bike routes
app.get('/api/routes', function apiIndex(req, res) {
  res.json({bikeRides});
});

// {method: "POST", path: "/api/route", description: "Create a new route"}
app.post('/api/routes', function apiIndex(req, res) {
  res.json({headline: "I'm just testing! I'll let you make a new route."});
});

// {method: "PUT", path: "/api/route/:id", description: "Update an existing route"}
app.put('/api/routes/:id', function apiIndex(req, res) {
  res.json({headline: "I'm just testing! I'll let you update an existing route."});
});

// {method: "DELETE", path: "/api/route/:id", description: "Delete an existing route"}
app.delete('/api/routes', function apiIndex(req, res) {
  res.json({headline: "I'm just testing! I'll let you delete an existing route."});
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
