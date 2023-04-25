//requiring the express and creating an instance
const express = require('express')
const app = express()

const bodyParser = require('body-parser');
require('dotenv').config()


//require the cors module and use it to enable CORS for all routes
const cors = require('cors')
app.use(cors())


// set up bodyparser middleware functions to parse incoming JSON and URL-encoded data with a maximum size of 100 megabytes.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000;      //Configure the port to which server should run

//Database connection
const db = require('./database.js');
db.connectToDB();


// Define the route to the cart API
app.use('/api', require('./routes/api'));

// Start the server by calling the listen() method on the app object
app.listen(PORT, () => {
    console.log("server started")
})