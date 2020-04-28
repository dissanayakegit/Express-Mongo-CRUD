require('dotenv/config')

const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//this will convert every request into json format
app.use(bodyParser.json());

//Import Middleware
const posts = require('./routes/posts')

app.use('/api/posts',posts);

 //Connect to db
 mongoose.connect(
        process.env.DB_CONNECT_STRING,{ useNewUrlParser: true, useUnifiedTopology: true },
        () => {console.log('connected to db!!!!') }
    );

const PORT = 3000;

app.listen(PORT, () => {console.log(`Server Started at ${PORT}`)});