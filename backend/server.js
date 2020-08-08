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
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: "secrets", saveUninitialized: true }));

// MongoDB coneection setup
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  resave: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection is up!");
});

// Import routes
app.get("/", function (req, res) {
  //res.send('<h2 style="text-align: center;"> Please login to use API </h1>');
  if(req.session.page_views){
    req.session.page_views++;
    res.send("You visited this page " + req.session.page_views + " times");
 } else {
    req.session.page_views = 1;
    res.send("Welcome to this page for the first time!");
 }
});

app.get("/yes", function (req, res) {
  res.send("hello world");
});

app.get("/hello", function (req, res) {
  res.send("helldddo world");
});

const mealsRouter = require("./routes/meals");
const usersRouter = require("./routes/users");
// const reactApp = require('../src/App');

app.use("/meals", mealsRouter);
app.use("/users", usersRouter);

app.use(express.static(path.join(__dirname, "build")));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.listen(port, () =>
  console.log(`FW backen app listening at http://localhost:${port}`)
);
