const express = require('express');
const methodOverride = require('method-override');
const mongoose = require ('mongoose');
const app = express();
const db = mongoose.connection;
const moviesController = require('./controllers/moviedb.js');
const session = require('express-session');
//PORT
const PORT = process.env.PORT || 3000;
const $ = require('jquery');
//Database
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + 'shiza';
//connect to mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
})
//Error/success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//open connection to mongodb

app.use(methodOverride('_method'));
// public folder for static
app.use(express.static('public'));

//middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/movies', moviesController);

app.listen(PORT, () => console.log( 'Listening on port:', PORT));
