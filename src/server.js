const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("dotenv").config({ path: '..\\.env'});

const pusher = new Pusher({
    appId: process.env.REACT_APP_PUSHER_API_APPID,
    key: process.env.REACT_APP_PUSHER_API_KEY,
    secret: process.env.REACT_APP_PUSHER_API_SECRET,
    cluster: process.env.REACT_APP_PUSHER_API_CLUSTER,
    useTLS: true
});

app.set('PORT', 5000);

app.post('/message', (req, res) => {
        const payload = req.body;
        pusher.trigger('my-channel', 'message', payload);
        res.send(payload);
});

app.listen(app.get('PORT'), () =>
    console.log('Listening at ' + app.get('PORT')))