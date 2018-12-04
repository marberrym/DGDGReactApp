import React from 'react';
import './checkin.css';
import './goalList.css';
import moment from 'moment';
import fetchReq from '../fetchReq';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

let checkinPrivacy = {
    '1': './icons/public.svg',
    '2': './icons/private.svg'
}

let CheckinList = (props) =>
    <div className="checkinBG">
        <div className="checkinHeader">
            <div>Check-in for {moment(props.checkin.creation_date).format('dddd [the] Do [of] MMMM [at] h:mmA')}</div>
            <div className="privacyStatus">
                <img className='icon' src={checkinPrivacy[props.checkin.checkin_privacy]}/>
                {props.checkin.checkin_privacy === 1 ?
                    <div>Public</div>
                :
                    <div>Private</div>
                }
                <button className="btn" onClick={event => {
                    fetchReq(`/updateprivacy?checkinID=${props.checkin.id}&privacy=${props.checkin.checkin_privacy}`, {
                        headers: {token: localStorage.token}
                    }, props.history.push, '/goals', props.dispatch)
                }}>Change</button>
            </div>
        </div>
        <div className="outcomeRow">
            <div className="singleOutcome">
                <div className="responseHeader">Goal Completed: </div>
                {props.checkin.goal_outcome === 1 ?
                    <div>
                        <div className="responseFlex">
                            <img src="./icons/trophy.png" className="checkinTrophy"/>
                            <div className="responseYes">YES</div>
                        </div>
                        <div className='completedText'>Congratulations!</div>
                    </div>
                :
                    <div className="responseNo">NO</div>
                }
            </div>
            <div className="singleOutcome">
                <div className="responseHeader">Helped Self:</div>
                {props.checkin.self_help === 1 ?
                    <div>
                        <div className="responseFlex">
                            <img src="./icons/trophy.png" className="checkinTrophy"/>
                            <div className="responseYes">YES</div>
                        </div>
                        <div className='completedText'>Congratulations!</div>
                    </div>
                :
                    <div className="responseNo">NO</div>
                }
            </div>
            <div className="singleOutcome">
                <div className="responseHeader">Helped Others:</div>
                {props.checkin.help_others === 1 ?
                    <div>
                        <div className="responseFlex">
                            <img src="./icons/trophy.png" className="checkinTrophy"/>
                            <div className="responseYes">YES</div>
                        </div>
                        <div className='completedText'>Congratulations!</div>
                    </div>
                :
                    <div className="responseNo">NO</div>
                }
            </div>
        </div>
    </div>

let CheckinListSmart = connect()(CheckinList)
export default withRouter(CheckinListSmart);