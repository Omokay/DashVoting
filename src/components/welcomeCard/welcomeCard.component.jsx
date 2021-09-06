import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import undraw from '../../static/images/undraw.png';


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
        marginRight: '20px',
        // [theme.breakpoints.down('xs')]: {
        //     width: '550px',
        //     transition: 'width 1s linear 1s',
        // },
        // [theme.breakpoints.down('sm')]: {
        //     width: '702px',
        //     transition: 'width 1s linear 1s',
        // },
        // [theme.breakpoints.up('md')]: {
        //     width: '890px',
        //     transition: 'width 1s linear 1s',
        // },

    },
    mainContent: {
         width: 'auto',
         padding:  '20px 40px',
    },
    svgWrapper: {
        position: 'absolute',
        top: '10px',
        left: '73%',
        width: '262px',
        height: '225px',
        zIndex: 5,
        opacity: 1,
        [theme.breakpoints.down('md')]: {
            left: '780px',
            width: '200px',
            height: '170px',
            transition: '1s ease',
        },
        // [theme.breakpoints.up('md')]: {
        //     left: '750px',
        //     width: '200px',
        //     height: '170px',
        //     transition: '1s ease',
        // },
        [theme.breakpoints.down('sm')]: {
            left: '750px',
            width: '200px',
            height: '170px',
            transition: '1s ease',
        },
        [theme.breakpoints.down('xs')]: {
            left: '550px',
            width: '200px',
            height: '170px',
            transition: '1s ease',
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
const WelcomeCard = () => {

    const classes = useStyles();
    return (
        <>
           <div className={classes.mainWrapper}>
               <div  className={classes.mainContent}>
                   <h3 className={classes.header}>Welcome back Prince!</h3>
                   <p className={classes.paragraphs}>Since your last login on the system, there were</p>
                   <p className={classes.paragraphs}>21 new registrations</p>
                   <p className={classes.paragraphs}>15 new reports</p>
                   <p className={classes.paragraphs}>45 new programs</p>
               </div>
           </div>
            <div className={classes.svgWrapper}>
                <img className={classes.svgConfig} src={undraw} alt='imgag'/>
            </div>
        </>
    )
}


export default WelcomeCard;
