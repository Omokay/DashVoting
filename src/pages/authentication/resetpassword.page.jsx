import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TextInput from "../../components/textInput/textInput.component";
import CustomSelect from "../../components/customselect/customselect.component";
import CheckBox from "../../components/checkbox/checkBox.component";
import CustomButton from "../../components/customButton/customButton.component";
import LockIcon from "@material-ui/icons/Lock";
import CloseIcon from "@material-ui/icons/Close";
import palogo from "../../static/images/palogo.png";
import Header from "../../components/header/header.component";

const useStyles = makeStyles((theme) => ({
    logo: {
        width: '90.41px',
        height: '26.64px',
        marginLeft: '40px',
        marginTop: '40px'
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '480px',
        height: '65px',
        [theme.breakpoints.up('xs')]: {
            height: 'auto',
            paddingTop:  '20px',
            paddingLeft: '15px',
            paddingRight: '15px',
        },
        backgroundColor: '#dde0e3',
        borderRadius: '5px',
        padding:  'auto 15px',
        fontSize: '12px',
    },
    box: {
        maxWidth: '520px',
        height: 'auto',
        paddingTop: '100px',
        margin: '0 auto',
    },

    vertical: {
        marginTop: '100px',
    },
    margLeft: {
        marginLeft: '20px',
    },
    title: {
        fontWeight: 'bold',
    },
    noMarg: {
        margin: '20px 0 40px 0',

    },
    iconStyles: {
        color:  '#918f8f',
        fontSize: 'medium',
    },
    subHeader: {
        fontWeight: 'bolder',
        fontSize: '20px',
    },
    pad5: {
        padding: '0 10px',
    }


}));

const ResetPassword = () => {
    const classes = useStyles();
    return (
        <>
            <Header />
            <div className={classes.box}>
                <h3 className={classes.title}>Reset password</h3>
                <p>Provide details below to login into your account. It will take a few seconds.</p>
                <p>All you need is your email</p>

                <div className={classes.flex}>
                    <LockIcon className={classes.iconStyles}/>
                    <p className={classes.pad5}>We take privacy issues seriously. You can be sure that your personal
                        data is securely protected</p>
                    <CloseIcon className={classes.iconStyles}/>

                </div>
                <div className={classes.noMarg}>
                    <div style={{
                        fontSize: '18px',
                        marginLeft: '3px',

                    }}>
                        <p  className={classes.subHeader}>User account details</p>
                        <p style={{fontSize:  '10px',}}>A link would be sent to the registered email provided below</p>
                    </div>
                    <TextInput label='Username' type='text'/>
                </div>
                <div className={classes.noMarg}>
                    <CustomButton className={classes.noMarg} name='Send Link' handleButton='' width='160px'/>
                </div>
            </div>
        </>
    )
}


export default ResetPassword;