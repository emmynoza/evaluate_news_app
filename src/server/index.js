const dotenv = require('dotenv');
dotenv.config();
const path = require("path");

const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const fetch = require('node-fetch')
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

// Meaningcloud API
var textApi = {
  app_key: process.env.API_KEY
}

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const apiKEY = textApi.app_key;

var textApi = {
  app_key: process.env.API_KEY
}

app.post('/postdata', async (req, res) => {
  const inputURL = req.body.url
  await fetch(`${baseURL}${apiKEY}&of=json&url=${inputURL}&lang=en`, { method: 'POST' })
    .then(res => res.json())
    .then(data => res.send(data))
})


