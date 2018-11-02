import React from 'react';
import NavBar from '../PageComponents/NavBar';
import inject from '../inject';
import { connect } from 'react-redux';
import HeadLogo from '../PageComponents/HeadLogo';
import Loading from '../PageComponents/Loading';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tabStyles.css';


let MyGoals = (props) =>
    <div className="pageLayout">
        {!props.loading ?
            <div className="pageLayout">
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
                        Daily Goals
                    </TabPanel>
                    <TabPanel>
                        Weekly Goals
                    </TabPanel>
                    <TabPanel>
                        Monthly Goals
                    </TabPanel>
                    <TabPanel>
                        Annual Goals
                    </TabPanel>
                    <TabPanel>
                        Completed Goals
                    </TabPanel>
                    <TabPanel>
                        Check Ins
                    </TabPanel>
                </Tabs>
                <div>This is where I will list all goals</div>
            </div>
        :
            <Loading/>
        }
    </div>
    

export default connect()(inject('/goal', {
    method: 'GET',
    headers: {token: localStorage.token}
})(MyGoals));