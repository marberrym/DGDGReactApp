const db = require('../database');
const jwt = require('jsonwebtoken');

let updatePrivacy = (req, res) => {
    let decoded = jwt.decode(req.headers.token);
    let goalID = req.query.goalID;
    let privacy = req.query.privacy;
    if (privacy === '1') {
        db.none(`UPDATE dgdg_goals SET goal_privacy=2 WHERE id=$1 AND user_id=$2`, [goalID, decoded.id])
        .then(res.send({status: 'success'}))
        .catch(err => {console.log(err);
            res.send({status: 'error',
            action: 'UPDATE_PRIVACY'
        });
        });
    } else if (privacy === '2'){
        db.none(`UPDATE dgdg_goals SET goal_privacy=1 WHERE id=$1 AND user_id=$2`, [goalID, decoded.id])
        .then(res.send({status: 'success'}))
        .catch(err => {console.log(err);
            res.send({status: 'error'});
        });
    } else {
        res.send({status: 'error'});
    }
}

module.exports = updatePrivacy;