const jwt = require('jsonwebtoken');
const secret = process.env.JWTSECRET;
const db = require('../database');

let login = (req, res) => {
    db.one(`SELECT username, id, email, avatar_file FROM dgdg_users WHERE username=$1 and password=$2`, [req.body.username, req.body.password])
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
            status: 'success',
            action: 'ASSIGN_USER'
        }
        console.log(response)
        res.send(response)
    })
    .catch(err => console.log(err))
}

module.exports = login