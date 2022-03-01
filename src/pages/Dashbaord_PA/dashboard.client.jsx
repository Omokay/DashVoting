import React from 'react';
import DashHeader from "../../components/navbar/navbar.component";
import WelcomeCard from "../../components/welcomeCard/welcomeCard.up";
import StatCard from "../../components/statsCard/stats.component";
import {makeStyles} from "@material-ui/core/styles";
import WelcomeClient from '../../components/welcomeCard/welcomeCard.client';
import HorizontalStepper from "../../components/horizontalStepper/horizontalStepper.component";
import Activities from "../../components/activitiesCard/activity.component";
import Feeds from "../../components/feedsCard/feeds.component";
import ProgramSummary from "../../components/programSummary/programSummary.component";
import VotingPeriod from "../../components/votingPeriodTable/votingPeriod.component";


const useStyles =  makeStyles(() => ({
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
}));


const ClientDashboard = () => {

    const classes = useStyles();
    return (
        <>
            <DashHeader>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0',
                }} className='row'>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }} className='col-lg-10 col-md-12 col-sm-12 col-xs-12'>
                        <WelcomeClient />
                        <HorizontalStepper />
                        <VotingPeriod />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }} className='col-lg-2 col-md-12 col-sm-12 col-xs-12'>
                        <StatCard />
                        <Activities />
                        <Feeds />
                    </div>
                </div>
            </DashHeader>
        </>
    )
}

export default ClientDashboard;
