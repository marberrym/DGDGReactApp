const db = require('../database');
const jwt = require('jsonwebtoken');

let newGoal = (req, res) => {
    let decoded = jwt.decode(req.headers.token)
    
    db.none(`INSERT into dgdg_goals (creation_date, user_id, goal_status, goal_name, 
        goal_scope, goal_category, goal_description, goal_privacy) VALUES 
        (CURRENT_TIMESTAMP, $1, $2, $3, $4, $5, $6, $7)`, [decoded.id, req.body.goal_status,
        req.body.goal_name, req.body.goal_scope, req.body.goal_category, req.body.goal_description,
        req.body.goal_privacy])
    .then(res.send({status: 'success'}))
    .catch(err => console.log(err))
}

module.exports = newGoal