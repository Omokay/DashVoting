import React from 'react';
import DashHeader from "../../components/navbar/navbar.component";
import WelcomeCard from "../../components/welcomeCard/welcomeCard.component";
import StatCard from "../../components/statsCard/stats.component";
import {makeStyles} from "@material-ui/core/styles";
import Activities from "../../components/activitiesCard/activity.component";
import CompanySummary from "../../components/companiesSummaryTable/companySummary.component";
import ProgramSummary from "../../components/programSummary/programSummary.component";


const useStyles =  makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    left: {

    },
    right: {

    },
}));


const DashboardPA = () => {

    const classes = useStyles();
    return (
        <>
          <DashHeader>
                {/*<div className={classes.root}>*/}
                {/*    <WelcomeCard />*/}
                {/*    <StatCard />*/}
                {/*    <Activities />*/}
                {/*    <CompanySummary />*/}
                {/*    <ProgramSummary />*/}
                {/*</div>*/}

              <div className='row'>
                  <div className='col-lg-9 col-md-8 col-sm-12 col-xs-12'>
                     <WelcomeCard />
                     <CompanySummary />
                     <ProgramSummary />
                  </div>
                  <div className='col-lg-3 col-md-4 col-sm-12 col-xs-12'>
                     <StatCard />
                     <Activities />
                  </div>
              </div>
          </DashHeader>
        </>
    )
}

export default DashboardPA;
