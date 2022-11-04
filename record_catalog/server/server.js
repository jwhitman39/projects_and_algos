// import express, cors; set port to 8000
const express = require('express');
// const spotifyWebApi = require('spotify-web-api-node');
const app = express();
const cors = require('cors')
const PORT = 8000;
// require configuration file
require('./config/mongoose.config.js');

// middleware for formatting and allowing post requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// // app.post('login', (req, res) => {
// //     const code = req.body.code
// //     const spotifyApi = new SpotifyWebApi({
// //         redirectUri: 'http://localhost:3000',
// //         clientId: 'dab4a552bdce42d5b82f9f1711664545',
// //         clientSecret: '34e47cab3430476aa4e64569e36e2486'
// //     })
// //     spotifyApi.authorizationCodeGrant(code)
// //     .then(data =>{
// //         res.json({
// //             accessToken: data.body.access_token,
// //             refreshToken: data.body.refresh_token,
// //             expiresIn: data.body.expires_in
// //         })
// //     }).catch((err)=>{
// //         res.sendStatus(400)
// //         console.log(err)
// //     })
// })


const routes = require('./routes/record.routes')
routes(app)



app.listen(PORT, ()=> 
    console.log(`Testing on port: ${PORT}`)
);