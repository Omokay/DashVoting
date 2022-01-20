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
    pad5: {
        padding: '0 15px',
    },
    pad20: {
        padding: '0 20px',
    },
    padTop30: {
        paddingTop: '20px',
        marginLeft: '20px',
    },
    verifiedEmail: {
        fontSize:  '16px',
        fontWeight: '500',

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
    margRight0: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '300px',
        marginTop: '0',
    },
    subHeader: {
        fontWeight: 'bolder',
        fontSize: '20px',
    }


}));

const LoginPage = () => {
    const classes = useStyles();
    return (
        <>
            <Header />
            <div className={classes.box}>
                <h3 className={classes.title}>Login</h3>
                <p>Provide details below to login into your account. It will take a few seconds.</p>
                <p>All you need is your email and password</p>

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
                        <p className={classes.subHeader}>User account details</p>
                        <p style={{fontSize:  '10px',}}>Specify exactly as registered</p>
                    </div>
                    <TextInput label='Username' type='text'/>
                    <TextInput label='Password' type='password'/>

                    <div className={classes.margRight0}>Forgot password?</div>
                </div>
                <div className={classes.noMarg}>
                    <CustomButton className={classes.noMarg} name='Login' handleButton='' width='160px'/>
                </div>
            </div>
        </>
    )
}


export default LoginPage;