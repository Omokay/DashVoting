import React, {useState} from 'react';
import LockIcon from "@material-ui/icons/Lock";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import SmallSelect from "../../components/smallSelect/smallSelect.component";
import TextInput from "../../components/textInput/textInput.component";
import CustomButton from "../../components/customButton/customButton.component";
import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
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
    flex2: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '180px',
        height: 'auto',
        fontSize: '12px',
        marginLeft: '10px',
    },
    flex3: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '440px',
        height: 'auto',
        fontSize: '12px',
        marginLeft: '10px',
    },

    title: {
        fontWeight: 'bold',
        fontSize: '32px',
    },
    title2: {
        fontWeight: 'bold',
        fontSize: '20px',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '520px',
        height: 'auto',
        paddingTop: '100px',
        margin: '0 auto',
    },
    box2: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '520px',
        height: 'auto',
        paddingTop: '50px',
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
    iconStyles: {
        color:  '#918f8f',
        fontSize: 'medium',
    },
    noMarg: {
        margin: '20px 0 40px 0',

    },
    progressLine: {
        display: 'flex',
        justifyContent: 'space-between',
        width:  '150px',
        alignContent: 'center',
        alignItems:  'center',
        marginTop: '80px',
        marginBottom: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    step: {
        width: '13px',
        height: '13px',
        // border: '2px Solid #CDCDCD',
        backgroundColor: '#2196f3',
        borderRadius: '50%',
    },
    line: {
        width: '45px',
        height: '1px',
        alignSelf: 'center',
        backgroundColor: '#CDCDCD',
    },
    vertical: {
        marginTop: '100px',
    },
    margLeft: {
        marginLeft: '20px',
        marginTop: '10px',
    }
}));

const NewRegistration = () => {
    const classes = useStyles();

    const [showStatement, setShow] = useState(true);
    return (
        <div>
            <div className={classes.box}>
                <h3 className={classes.title}>New Registration</h3>
                <p>Fill in the registration data. It will take a couple of minutes.
                All you need is a phone number and some other information</p>

                {
                    (showStatement) ?
                        (<div className={classes.flex}>
                            <LockIcon className={classes.iconStyles}/>
                            <p className={classes.pad5}>We take privacy issues seriously. You can be sure that your personal
                                data is securely protected</p>
                            <CloseIcon className={classes.iconStyles}/>

                        </div>) :
                        null
                }
                <div className={classes.padTop30}>
                    <p style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        margin: '3px',
                        color: '#9e9d9d',

                    }}>Enter your Company's phone number</p>

                </div>


                <div className={classes.margLeft} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '430px',
                    padding: 0,

                }}>
                    <SmallSelect width='100px'/>
                    <TextInput
                        style={{marginLeft: '2px'}}
                        color='secondary' label='' type='text'/>
                </div>
                <div className={classes.noMarg}>
                    <CustomButton className={classes.noMarg} name='Send code' handleButton='' width='160px'/>
                </div>
            </div>
        </div>
    )
}

export default NewRegistration;