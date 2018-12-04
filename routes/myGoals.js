const db = require('../database');
const jwt = require('jsonwebtoken');

let myGoals = (req, res) => {
    let decoded = jwt.decode(req.headers.token)
    
    let goals = db.query(`SELECT * FROM dgdg_goals WHERE user_id=$1 ORDER BY creation_date DESC`, decoded.id)
    let checkins = db.query(`SELECT * FROM dgdg_checkins WHERE user_id=$1 ORDER BY creation_date DESC`, decoded.id)
    
    Promise.all([goals, checkins])
    .then(data => {
        let response = {
            status: "success",
            action: "ASSIGN_GOALS",
            data: {
                goals: data[0],
                checkins: data[1]
            }
        }
        res.send(response)
    })
    .catch(err => {
        console.log(err)
        res.send({status: 'error'})
    })
}
    


module.exports = myGoals;