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

const signup = require('./routes/signup');
const login = require('./routes/login');
const validate = require('./routes/validate');
const newGoal = require('./routes/newGoal');
const myGoals = require('./routes/myGoals');
const updatePrivacy = require('./routes/updatePrivacy');
const completeGoal = require('./routes/completeGoal');

app.use(bodyParser.json());
app.use(allowCORS);

//signup route
app.post('/signup', signup);

//login route
app.post('/login', login);

//post new goal
app.post('/goal', protect, newGoal);

//get my goals
app.get('/goal', protect, myGoals);
app.get('/updateprivacy', protect, updatePrivacy);
app.get('/complete', protect, completeGoal);

//validate existing token
app.get('/validate', validate);

app.listen(5000)