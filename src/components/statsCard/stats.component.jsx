import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles( (theme) => ({
    root: {
        display: 'flex',
    },
    row: {
        padding: '10px',
        minWidth: '328px',
        height: '100px',
        background: '#FFFFFF',
        borderRadius: '4px',
        opacity: 1,
        display: 'flex',
        justifyContent: 'space-between',

        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: '100px',
            padding: '10px',
        },

    },
    columns: {
        margin: 'auto auto',
        display: 'block',
    },
    statHeader: {
        fontSize: '12px',
        color: '#222222',
        width: 'auto',
        height: 'auto',
        textAlign: 'center',
        letterSpacing: '0px',
        opacity: '0.7',
        margin: '0 auto',
    },
    statBody: {
        color: '#222222',
        fontSize: '20px',
        width: '50px',
        height: 'auto',
        textAlign: 'center',
        fontWeight: '900',
        letterSpacing: '0px',
        opacity: 1,
        margin: '0 auto',
    },
}));


const StatCard = () => {
    const classes = useStyles();

    const getCompanyCount = () => {};
    const registrationCount = () => {};
    const getUsersCount = () => {};
    return  (
        <>
          <div className={classes.row}>
              <div className={classes.columns}>
                  <p className={classes.statHeader}>Number of Users</p>
                  <p className={classes.statBody}>05</p>
              </div>
              <div style={{
                  borderLeftWidth: '2px',
                  borderLeftColor: '#F5F6F9',
                  borderLeftStyle: 'solid',
                  padding: '10px',
                  borderRightWidth: '2px',
                  borderRightColor: '#F5F6F9',
                  borderRightStyle: 'solid'
              }} className={classes.columns}>
                  <p className={classes.statHeader}>Number of Companies</p>
                  <p className={classes.statBody}>305</p>
              </div>
              <div className={classes.columns}>
                  <p className={classes.statHeader}>Pending Registrations</p>
                  <p className={classes.statBody}>10</p>
              </div>
          </div>
        </>
    )
}

export default StatCard;
