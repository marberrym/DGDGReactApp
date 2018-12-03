const db = require('../database');
const jwt = require('jsonwebtoken');

let newCheckin = (req, res) => {
    let decoded = jwt.decode(req.headers.token);
    db.none(`INSERT into dgdg_checkins (creation_date, user_id, goal, goal_outcome, 
        goal_improvements, self_help, self_help_response, help_others, help_others_response) VALUES 
        (CURRENT_TIMESTAMP, $1, $2, $3, $4, $5, $6, $7, $8)`, [decoded.id, req.body.goal,
        req.body.goal_outcome, req.body.goal_improvements, req.body.self_help, req.body.self_help_response,
        req.body.help_others, req.body.help_others_response])
    .then(res.send({status: "success"}))
    .catch(err => {
        console.log(err);
        res.send({
            status: "error",
            error: err
        });
    })
}

module.exports = newCheckin;