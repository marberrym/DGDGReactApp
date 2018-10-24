const jwt = require('jsonwebtoken');
const secret = process.env.JWTSECRET;
const db = require('../database');

let validate = (req, res) => {
    jwt.verify(req.headers.token, secret, (err, decoded) => {
        if (err) {
            console.log(err);
            res.send({status: 'error'})
        } else {
            db.one(`SELECT first_name, last_name, email, avatar_file, id FROM dgdg_users where id=$1`, decoded.id)
            .then(data => {
                let user = {
                    id: data.id,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    avatar: data.avatar_file,
                    status: 'success'
                }
                res.send(user)
            })
            .catch(err => console.log(err))
        }
  });
}
module.exports = validate;