require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
const port = process.env.PORT || 5000;
const postQuery = 'grant_type=client_credentials';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/getToken', function(req, res) {
  const {SPOTIFY_API_KEY, SPOTIFY_API_SECRET} = process.env;
  request({
    url: "https://accounts.spotify.com/api/token",
    method: "POST",
    headers: {
      'Authorization': 'Basic ' + Buffer.from(SPOTIFY_API_KEY + ':' + SPOTIFY_API_SECRET).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postQuery.length
    },
    body: postQuery
  }, function (error, response, data) {
      res.end(data);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));