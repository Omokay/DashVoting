import React from 'react';
import DashHeader from "../../components/navbar/navbar.component";
import WelcomeCard from "../../components/welcomeCard/welcomeCard.component";
import StatCard from "../../components/statsCard/stats.component";
import {makeStyles} from "@material-ui/core/styles";


const useStyles =  makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
}));


const DashboardPA = () => {

    const classes = useStyles();
    return (
        <>
          <DashHeader>
                <div className={classes.root}>
                    <WelcomeCard />
                    <StatCard />
                </div>
          </DashHeader>
        </>
    )
}

export default DashboardPA;
