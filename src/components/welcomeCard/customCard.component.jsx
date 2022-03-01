import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import undraw from '../../static/images/undraw.png';
import SmallButton from "../customButton/smallButton.component";


const useStyles = makeStyles((theme) => ({
    root:  {
        display: 'flex',
        padding: '30px',
    },
    mainWrapper: {
        marginTop: '30px',
        width: '100%',
        height: 'auto',
        background: '#FFFFFF',
        borderRadius: '4px',
        boxShadow: '0px 3px 6px #272D3B33',
        opacity: 1,
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            width: '600px',
            transition: 'width 1s linear 1s',
        },

    },
    mainContent: {
        width: 'auto',
        padding:  '20px 40px',
    },
    svgWrapper: {
        width: '252px',
        height: '215px',
        marginTop: '-20px',
        marginLeft: '-20px',
        zIndex: 5,
        opacity: 1,
        [theme.breakpoints.down('md')]: {
            width: '200px',
            height: '170px',
        },

    },
    svgConfig: {
        width: '100%',
        height: '100%',
    },
    header: {
        fontSize: '26px',
        color: '#272D3B',
        fontWeight: 'bolder',
    },
    paragraphs: {
        textAlign: 'left',
        letterSpacing: 0,
        fontSize: '18px',
        color: '#272D3B',
        opacity: 1,
    },

}));

//props drilling between this Component and SmallButton Component.
const CustomWelcomeCard = ({isType, name}) => {

    const classes = useStyles();
    return (
        <>
            <div className={classes.mainWrapper}>
                <div  className={classes.mainContent}>
                    <h3 className={classes.header}>Welcome back Prince!</h3>
                    <p className={classes.paragraphs}>Since your last login on the system, there were</p>
                    <p className={classes.paragraphs}>21 new Users</p>

                    <SmallButton name={name} isType={isType}/>
                </div>

                <div className={classes.svgWrapper}>
                    <img className={classes.svgConfig} src={undraw} alt='imgag'/>
                </div>

            </div>
        </>
    )
}


export default CustomWelcomeCard;
