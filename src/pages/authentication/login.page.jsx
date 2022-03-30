import React from 'react';
import {Link, NavLink} from 'react-router-dom';
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
    container: {

    },
    logo: {
        width: '90.41px',
        height: '26.64px',
        marginLeft: '40px',
        marginTop: '40px'
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '456px',
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
        maxWidth: '456px',
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
        fontSize: '32px',
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
        width: '392px',
        marginTop: '0',
    },
    subHeader: {
        fontWeight: 'bold',
        fontSize: '20px',
    },
    action: {
        margin: '20px 0 40px 0',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },
    signup: {
        width: '89px',
        height: '24px',
    }

}));

const LoginPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
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
                        marginLeft: '15px',
                    }}>
                        <p className={classes.subHeader}>User account details</p>
                        <p style={{fontSize:  '10px',}}>Specify exactly as registered</p>
                        <TextInput label='Username' type='text' width='380px'/>
                        <TextInput label='Password' type='password' width='380px'/>

                        <NavLink style={{textDecoration: 'none', color: '#6c757d',}} to='/forgot_password'>
                            <div className={classes.margRight0}>Forgot password?</div>
                        </NavLink>
                    </div>

                </div>
                <div className={classes.action}>
                    <CustomButton  name='Sign In' handleButton='' width='160px'/>
                    <Link style={{display: 'flex', alignItems: 'center', justifyContent:'flex-end', textDecoration: 'none', color: '#575F6E', paddingTop: '25px', marginRight: '5px',}} to='/sign_up'>
                        <p className={classes.signup}>
                            Sign Up
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default LoginPage;