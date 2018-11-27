const db = require('../database');
const jwt = require('jsonwebtoken');

let newCheckin = (req, res) => {
    let decoded = jwt.decode(req.headers.token);
    console.log(req.body);
}

module.exports = newCheckin;