//  Express server.
//  Run server with `node server.js`
//  dotenv is used to store env vars in .env
// 

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 

require('dotenv').config(); 

const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection; 
connection.once('open', () => {
    console.log("MongoDB connection is up!");
})
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))