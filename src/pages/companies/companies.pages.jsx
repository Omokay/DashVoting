import React from 'react';
import DashHeader from "../../components/navbar/navbar.component";
import {makeStyles} from "@material-ui/core/styles";
import CustomWelcomeCard from "../../components/welcomeCard/customCard.component";
import ProgramTable from "../../components/programTable/programTable.component";
import StatCard from "../../components/statsCard/stats.component";
import Activities from "../../components/activitiesCard/activity.component";
import Feeds from "../../components/feedsCard/feeds.component";
import CompanyTable from "../../components/companyTable/companyTable.component";


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

const Companies = () => {
    const classes = useStyles();
    return (
        <>
            <DashHeader>
                <div className={classes.wrapper}>
                    <div className='row'>
                        <div className='col-lg-9 col-md-12 col-sm-12 col-xs-12'>
                            {/*isType is add to show add user or 'view' / false to show view registrations*/}
                            <CustomWelcomeCard name='View Pending Reg' isType='view'/>
                            <div className={classes.flex}>
                                <CompanyTable />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
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

export default Companies;
