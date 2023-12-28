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

router.get('/auth/login', (req, res) => {
    
    const scope = "streaming \
                    user-read-email \
                    user-read-private"

    const state = generateRandomString(16);

    const auth_query_parameters = new URLSearchParams({
        response_type: "code",
        client_if: spotify_client_id,
        scope: scope,
        redirect_url: "http://localhost:3000/auth/callback",
        state: state
    })

    res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
});




