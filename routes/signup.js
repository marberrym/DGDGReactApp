const db = require('../database');
const jwt = require('jsonwebtoken');
const secret = process.env.JWTSECRET;

let signUp = (req, res) => {
    console.log(req.body);
    db.one(`INSERT INTO dgdg_users (username, first_name, last_name, email, avatar_file, password)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING username, id, avatar_file;`, [req.body.username, req.body.first_name, req.body.last_name,
        req.body.email, req.body.avatar_file || 'MillionsKnives.png', req.body.password])
    .then(data => {
        let token = jwt.sign(data, secret, {
            expiresIn: "7d"
        })
        let response = {
            token: token,
            data: {
                username: data.username,
                id: data.id,
                avatar: data.avatar_file,
            },
            status: 'success'
        }
        res.send(response)
    })
    .catch(err => console.log(err))
}

module.exports = signUp;