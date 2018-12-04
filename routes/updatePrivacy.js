const db = require('../database');
const jwt = require('jsonwebtoken');

let updatePrivacy = (req, res) => {
    let targetTable;
    let targetPrivacy
    let decoded = jwt.decode(req.headers.token);

    let targetID = req.query.goalID || req.query.checkinID;
    console.log(targetID);

    if (req.query.goalID === undefined) {
        targetTable = `dgdg_chekins`
        targetPrivacy = `checkin_privacy`
    } else {
        targetTable = `dgdg_goals`
        targetPrivacy = `goal_privacy`
    }

    console.log(targetTable);

    let privacy = req.query.privacy;
    if (privacy === '1') {
        db.none(`UPDATE $1 SET $2=2 WHERE id=$3 AND user_id=$4`, [targetTable, targetPrivacy, targetID, decoded.id])
        .then(res.send({
            status: 'success',
            action: 'UPDATE_PRIVACY',
            data: {
                    privacy: 2,
                    type: targetPrivacy,
                    id: Number(targetID)
                }
        }))
        .catch(err => {console.log(err);
            res.send({status: 'error'});
        });
    } else if (privacy === '2'){
        db.none(`UPDATE $1 SET $2=1 WHERE id=$3 AND user_id=$4`, [targetTable, targetPrivacy, targetID, decoded.id])
        .then(res.send({
            status: 'success',
            action: 'UPDATE_PRIVACY',
            data: {
                    privacy: 1,
                    type: targetPrivacy,
                    id: Number(targetID)
                }
        }))
        .catch(err => {console.log(err);
            res.send({status: 'error'});
        });
    } else {
        res.send({status: 'error'});
    }
}

module.exports = updatePrivacy;