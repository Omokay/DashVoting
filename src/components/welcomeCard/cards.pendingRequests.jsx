import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import undraw from '../../static/images/undraw.png';
import {useStyles} from "./welcomeCard.up";

const ReqCards = () => {

    const classes = useStyles();
    return (
        <>
            <div className={classes.mainWrapper}>
                <div  className={classes.mainContent}>
                    <h3 className={classes.header}>Welcome back Omoke!</h3>
                    <p className={classes.paragraphs}>Since your last login on the system, there were</p>
                    <p className={classes.paragraphs}>21 new requests have been approved</p>
                    <p className={classes.paragraphs}>15 new requests have been declined</p>
                </div>

                <div className={classes.svgWrapper}>
                    <img className={classes.svgConfig} src={undraw} alt='imgag'/>
                </div>

            </div>
        </>
    )
}


export default ReqCards;
