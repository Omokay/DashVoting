import React from 'react';
import DashHeader from "../../components/navbar/navbar.component";
import WelcomeCard from "../../components/welcomeCard/welcomeCard.up";
import StatCard from "../../components/statsCard/stats.component";
import {makeStyles} from "@material-ui/core/styles";
import Activities from "../../components/activitiesCard/activity.component";
import CompanySummary from "../../components/companiesSummaryTable/companySummary.component";
import ProgramSummary from "../../components/programSummary/programSummary.component";
import Feeds from "../../components/feedsCard/feeds.component";
import CustomMuiTable from "../../components/muiTable/companyTable.component";


const useStyles =  makeStyles(() => ({
    wrapper: {
        maxWidth: '1536px',
        margin: '0 5px',

    },
}));


const DashboardPA = () => {

    const classes = useStyles();
    return (
        <>
          <DashHeader>
              <div className={classes.wrapper}>
                  <div className='row'>
                      <div className='col-lg-8 col-md-12 col-sm-12 col-xs-12'>
                          <WelcomeCard />
                          <CompanySummary />
                          <ProgramSummary />
                      </div>
                      <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                          <StatCard />
                          <Activities />
                          <Feeds />
                      </div>
                  </div>
              </div>
          </DashHeader>
        </>
    )
}

export default DashboardPA;
