//Dependencies

const express = require('express')
const methodOverride  = require('method-override')
const mongoose = require ('mongoose')
const app = express();
const db = mongoose.connection
require('dotenv').config()

//Port

// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT

//Database

// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI
// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//Middleware

//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project if you are using 3rd party API you need it
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
// sign up/log in
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
)
// Controllers
const routesController = require('./controllers/routes.js')
app.use('/routes', routesController)


// Routes

//localhost:3000
app.get('/' , (req, res) => {
  res.redirect('/home');
});



//Listener

app.listen(PORT, () => console.log( 'Listening on port:', PORT));
