const db = require('../database');
const jwt = require('jsonwebtoken');

let completeGoal = (req, res) => {
    let decoded = jwt.decode(req.headers.token)
    let goalID = req.query.goalID;

    db.none(`UPDATE dgdg_goals SET goal_status=3 WHERE id=$1 and user_id=$2`, [goalID, decoded.id])
    .then(res.send({
        status: 'success',
        action: 'COMPLETE_GOAL',
        data: {
            id: Number(goalID)
        }
    }))
    .catch(err => console.log(err))
}

module.exports = completeGoal;