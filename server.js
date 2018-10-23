const express = require('express');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
const secret = process.env.JWTSECRET;
const allowCORS = require('./middleware/allow-CORS');

const app = express();
const protect = expressJwt({
    secret,
    getToken: (req) => req.headers.token
});

app.use(bodyParser.json());
app.use(allowCORS);

app.listen(5000)