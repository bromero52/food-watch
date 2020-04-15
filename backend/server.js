//  Express server.
//  Run server with `node server.js`
//  dotenv is used to store env vars in .env

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const path = require('path');

require('dotenv').config(); 

const app = express();
const port = process.env.PORT;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection; 
connection.once('open', () => {
    console.log("MongoDB connection is up!");
})


// Import routes 
//app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'))
const mealsRouter = require('./routes/meals');
const usersRouter = require('./routes/users');
const reactApp = require('../src/App');

app.use('/meals', mealsRouter);
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) 


