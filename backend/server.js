//  Express server.
//  Run server with `node server.js`
//  dotenv is used to store env vars in .env
const express = require("express"),
  bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(cors());
// app.use(bodyParser());
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: "secrets", saveUninitialized: true }));

// MongoDB connection setup
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  methods: ["PUT", "POST"],
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection is up!");
});

// Import routes
// First funcition is to test sessions 
app.get("/", function (req, res) {
  if(req.session.page_views){
    req.session.page_views++;
    res.send("You visited this page " + req.session.page_views + " times");
 } else {
    req.session.page_views = 1;
    res.send("Welcome to this page for the first time!");
 }
});

const mealsRouter = require("./routes/meals");
const usersRouter = require("./routes/users");
// const reactApp = require('../src/App');

app.use("/meals", mealsRouter);
app.use("/users", usersRouter);

app.use(express.static(path.join(__dirname, "build")));

app.listen(port, () =>
  console.log(`FW backen app listening at http://localhost:${port}`)
);
