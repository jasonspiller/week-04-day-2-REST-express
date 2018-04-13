// setup
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');


// parse post commands
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// add a public directory
app.use(express.static('public'))

// external api
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// data
let arrComedians = [
	{id: 1, name: 'Jerry Seinfeld', url:'http://https://www.youtube.com/watch?v=HfYzlSNHapA'},
	{id: 2, name: 'Rodney Dangerfield', url:'https://www.youtube.com/watch?v=Fmr-GyxF_P4'},
	{id: 3, name: 'Dave Chapell', url:'https://www.youtube.com/watch?v=wR5hlzq8quM'}
];


// route tests
app.get('/videos', (req, res) => {
	res.send('all videos');
})

app.get('/videos/:id', (req, res) => {
	res.send('video by id');
})

app.get('/comedians', (req, res) => {
	res.send('all comedians');
})

app.get('/comedians/:id', (req, res) => {
	let id = req.params.id;
	res.send(arrComedians[id-1].name);
})

app.get('/comedians/:id/videos', (req, res) => {
	res.send('all videos by comedian');
})

app.get('/comedians/:id/videos/:id', (req, res) => {
	res.send('a specific video by a comedian');
})

// full api
app.get('/api/v1', (req, res) => {
	res.send(arrComedians);
})

// api by id
app.get('/api/v1/:id', (req, res) => {
	res.send(arrComedians[req.params.id-1]);
})

// home page
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
})


// post
app.post('/test', (req, res) => {
	var test = req.body.test;
	arrComedians.push({id:test, name:test, url:test})
	res.end(console.log(arrComedians));
})


// run the server
app.listen(3000, () => {
	console.log('Hello Dave');
})
