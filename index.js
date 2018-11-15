// Sets up dotenv as soon as our application starts
require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();
const routes = require('./routes/index.js');

const environment = process.env.NODE_ENV; // development
const stage = require("./config")[environment];

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

if (environment !== "production") {
  app.use(logger("dev"));
}

app.use('/api/v1', routes(router));

app.listen(`${stage.port}`, () => {
  console.log(`Server now listening at localhost:${stage.port}`);
});

module.exports = app;
