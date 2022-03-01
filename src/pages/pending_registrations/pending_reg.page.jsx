import React from 'react';
import DashHeader from "../../components/navbar/navbar.component";
import CustomWelcomeCard from "../../components/welcomeCard/customCard.component";
import StatCard from "../../components/statsCard/stats.component";
import Activities from "../../components/activitiesCard/activity.component";
import Feeds from "../../components/feedsCard/feeds.component";
import {makeStyles} from "@material-ui/core/styles";
import ProgramTable from "../../components/programTable/programTable.component";
import ReqCards from "../../components/welcomeCard/cards.pendingRequests";
import PendingReqTable from "../../components/pendingReqTable/pendingReq.component";


const useStyles =  makeStyles((theme) => ({
    wrapper: {
        maxWidth: '1536px',
        margin: '0 5px',
    },
    flex: {
        display: 'flex',
        margin: 0,
    }
}));


const PendingRequests = () => {
    const classes = useStyles();

    return (
        <>
            <DashHeader>
                <div className={classes.wrapper}>
                    <div className='row'>
                        <div className='col-lg-10 col-md-12 col-sm-12 col-xs-12'>
                            {/*isType is add to show add user or 'view' / false to show view registrations*/}
                            <ReqCards />
                            <div className={classes.flex}>
                                <PendingReqTable />
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-12 col-sm-12 col-xs-12'>
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

export default PendingRequests;
