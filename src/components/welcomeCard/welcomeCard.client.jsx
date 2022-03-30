import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        width: 'inherit',
        // maxWidth: '960px',
        height: '190px',
        display: 'flex',
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        padding: '50px',
        borderRadius: '4px',

        [theme.breakpoints.down('md')]: {
            width: '600px',
            transition: 'width 1s linear 1s',
        },
    },
    left: {
        width: '456px',
        // marginLeft: '50px',
    },
    companyName: {
        maxWidth: '456px',
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#242731',
    },
    companyDescription: {
        maxidth: '456px',
        height: '44px',
        fontSize: '16px',
          // color: '#575F6E',
    },
    action: {
        cursor: 'pointer',
    }
}))

const WelcomeClient = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.mainWrapper}>
                <div className={classes.left}>
                    <h2 className={classes.companyName}>Who wants to be a millonaire?</h2>
                    <p className={classes.companyDescription}>........</p>
                </div>
                <div className={classes.action}>
                    <MoreVertIcon />
                </div>
            </div>
        </>
    )
}


export default WelcomeClient;
