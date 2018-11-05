import React, { Component } from 'react';
import NavBar from '../PageComponents/NavBar';
import inject from '../inject';
import { connect } from 'react-redux';
import HeadLogo from '../PageComponents/HeadLogo';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tabStyles.css';
import GoalList from '../PageComponents/GoalList';



class MyGoals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            daily: [],
            weekly: [],
            monthly: [],
            annual: [],
            completed: [],
            checkins: []
        }
    }

    componentDidUpdate(prevState) {
        if (prevState !== this.props) {
            this.setState({
                daily: this.props.goals.filter(goal => goal.goal_scope === 1),
                weekly: this.props.goals.filter(goal => goal.goal_scope === 2),
                monthly: this.props.goals.filter(goal => goal.goal_scope === 3),
                annual: this.props.goals.filter(goal => goal.goal_scope === 4),
                completed: this.props.goals.filter(goal => goal.goal_status === 3),
            })
        }
    }

    render() {
        return <div className="pageLayout">
            <NavBar/>
            <HeadLogo/>
            <Tabs selectedTabClassName="selectedTab" selectedTabPanelClassName="tabView" className="tabSection">
                <TabList className="tabPanel">
                    <Tab className="tab">Daily Goals</Tab>
                    <Tab className="tab">Weekly Goals</Tab>
                    <Tab className="tab">Monthly Goals</Tab>
                    <Tab className="tab">Annual Goals</Tab>
                    <Tab className="tab">Completed Goals</Tab>
                    <Tab className="tab">Check Ins</Tab>
                </TabList>
                <TabPanel>
                    {this.state.daily.length === 0 ?
                        <div>You don't have any goals set for today!  Let's set some.</div>
                    :
                        this.state.daily.map(goal => <GoalList goal={goal}/>)
                    }
                </TabPanel>
                <TabPanel>
                    {this.state.weekly.length === 0 ?
                        <div>You don't have any goals set for this week!  Let's set some.</div>
                    :
                        <div>Weekly Goals</div>
                    }
                </TabPanel>
                <TabPanel>
                    {this.state.monthly.length === 0 ?
                        <div>You don't have any goals set for this month!  Let's set some.</div>
                    :
                        <div>Monthly Goals</div>
                    }
                </TabPanel>
                <TabPanel>
                    {this.state.annual.length === 0 ?
                        <div>You don't have any goals set for this year!  Let's set some.</div>
                    :
                        <div>Annual Goals</div>
                    }
                </TabPanel>
                <TabPanel>
                    {this.state.completed.length === 0 ?
                        <div>You don't have any completed goals with DGDG!  Let's start some!</div>
                    :
                        <div>Completed Goals</div>
                    }
                </TabPanel>
                <TabPanel>
                    {this.state.checkins.length === 0 ?
                        <div>You don't have check-ins with DGDG!  Let's get one started.</div>
                    :
                        <div>Check Ins</div>
                    }
                </TabPanel>
            </Tabs>
        </div>
    }
}
    
let MyGoalsSmart = connect(state => ({goals: state.goals}))(MyGoals)

export default connect()(inject('/goal', {
    method: 'GET',
    headers: {token: localStorage.token}
})(MyGoalsSmart));