const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pusher = new Pusher({
    appId: process.env.REACT_APP_PUSHER_API_APPID,
    key: process.env.REACT_APP_PUSHER_API_KEY,
    secret: process.env.REACT_APP_PUSHER_API_SECRET,
    cluster: "us3",
    useTLS: true
});


// 
app.set('PORT', process.env.PORT || 5000);

app.post('/message', (req, res) => {
    try {
        const payload = req.body;
        pusher.trigger('my-channel', 'message', payload, {
            socket_id: req.body.socket_id,
        }).catch((error) => {
            console.log(error);
        }
        );
        res.send(payload);
    }
    catch (e) {
        console.log(e);
    }

});

app.listen(app.get('PORT'), () =>
    console.log('Listening at ' + app.get('PORT')))