const db = require('../database');
const jwt = require('jsonwebtoken');

let myGoals = (req, res) => {
    let decoded = jwt.decode(req.headers.token)
    try {
        db.query(`SELECT * FROM dgdg_goals WHERE user_id=$1 ORDER BY creation_date DESC`, decoded.id)
        .then(data => {
            let response = {
            data: {
                goals: data
            },
            status: 'success',
            action: 'ASSIGN_GOALS'
        }
        res.send(response)
        })
    }
    catch (err) {
        console.log(err)
        res.send({status: 'no goals'})
    }
    
}

module.exports = myGoals;