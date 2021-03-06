const jwt = require('jsonwebtoken');
const secret = process.env.JWTSECRET;
const db = require('../database');

let validate = (req, res) => {
    jwt.verify(req.headers.token, secret, (err, decoded) => {
        if (err) {
            res.send({status: 'error',
                error: err.message
            })
        } else {
            db.one(`SELECT username, first_name, last_name, email, avatar_file, id FROM dgdg_users WHERE id=$1`, decoded.id)
            .then(data => {
                let user = {
                    data: {
                        username: data.username,
                        id: data.id,
                        first_name: data.first_name,
                        last_name: data.last_name,
                        email: data.email,
                        avatar: data.avatar_file
                    },
                    action: 'ASSIGN_USER',
                    status: 'success'
                }
                res.send(user)
            })
            .catch(err => console.log(err))
        }
  });
}
module.exports = validate;