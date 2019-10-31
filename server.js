mongodb+srv://muhammad:<password>@mern-shopping-jsaql.gcp.mongodb.net/test?retryWrites=true&w=majority


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json())

// DB config
const db = require('./config/keys').mongoURI;

// connect to Mongo
mongoose.connect(db)
    .then( () => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server Started on port ${port}`));