const express = require('express');
const dotenv = require('dotenv'); 

const port = 5000; 

dotenv.config()

const spotify_client_id = process.env.SPOTIFY_CLIENT_ID
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET

const app = express(); 

app.get('/auth/login', (req, res) => {
}); 

app.get('/auth/callback', (req, res) => {
}); 

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
}); 

// State 
const generateRandomString = function (length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  


