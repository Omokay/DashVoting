import avatar from "../../static/images/userAvatar.svg";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '100%',
        height: '190px',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '8px',

    },
    border: {
        width: '99px',
        height: '104px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: '10px',
        border: '1px solid #E2E4E5',
        padding: '20px',
        marginBottom: '18px',
        transition: '0.5s ease',
        '&:hover': {
            cursor: 'pointer',
            width: '110px',
            height: '124px',
        }

    },
    avatarContainer: {
        width: '63px',
        height: '40px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //
        // '&:hover ': {
        //     cursor: 'pointer',
        // }
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
    avatarSpan: {
        width: '48px',
        height: '25px',
        fontSize: '11px',
        color: '#B7B7B7',
        margin: '5px auto',
        textAlign: 'center',
    },
}))


const ProfileSlider = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.border}>
                <div className={classes.avatarContainer}>
                    <img className={classes.avatar} src={avatar} />
                    <div className={classes.avatarSpan}>attach an image</div>
                </div>
            </div>
        </div>
    )
};

export default ProfileSlider;
