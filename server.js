// Dependencies
// =================================================================
var express = require('express');
// var path = require('path');

// Set up Express App
// =================================================================
var app = express();
var PORT = process.env.PORT || 8080

// Set up Express middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start server to begin listening
// =================================================================
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
})

// ROUTER
// =================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Data
// =================================================================
// var friends = [
//     {
//         name: 'Tiger Woods',
//         photo: 'https://usatgolfweek.files.wordpress.com/2018/08/tiger-woods-pga-championship-highlights-sunday-e1534705656333.jpg?w=1000&h=600&crop=1',
//         scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
//     },
//     {
//         name: 'Phil Mickelson',
//         photo: 'https://media.golfdigest.com/photos/59a9e793a385f914e829ffdc/master/w_768/Phil-Mickelson.jpg',
//         scores: [1, 5, 2, 2, 1, 5, 4, 1, 2, 5]
//     },
//     {
//         name: 'Rory McIlroy',
//         photo: 'https://media.golfdigest.com/photos/59cbefb96c0b3a5cd5fc619c/master/w_768,c_limit/rory-mcilroy-british-masters-2017-tuesday.jpg',
//         scores: [3, 2, 3, 3, 5, 2, 1, 3, 5, 1]
//     },
//     {
//         name: 'Vijay Singh',
//         photo: 'https://media.golfdigest.com/photos/5929dcd251acd351a964161b/master/pass/Vijay-Singh-Senior-PGA.jpg',
//         scores: [4, 2, 1, 4, 4, 5, 2, 1, 1, 4]
//     },
//     {
//         name: 'Ernie Els',
//         photo: 'https://usatgolfweek.files.wordpress.com/2017/06/ernie-els-u-s-open-thursday1.jpg?w=1000&h=600&crop=1',
//         scores: [5, 5, 5, 3, 4, 1, 1, 1, 5, 4]
//     }
// ];

// HTML Routes
// =================================================================
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'app/public/home.html'));
// });

// app.get('/survey', function(req, res) {
//     res.sendFile(path.join(__dirname, 'app/public/survey.html'));
// });

// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'app/public/home.html'));
// });

// API Routes
// =================================================================
// app.get('/api/friends', function(req, res) {
//     return res.json(friends)
// })

// app.post('/api/friends', function(req, res) {
    
// })