import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useStyles} from "./newRegistration.page";
import EditIcon from "@material-ui/icons/Edit";
import TextInput from "../../components/textInput/textInput.component";
import ReplayIcon from "@material-ui/icons/Replay";
import LockIcon from "@material-ui/icons/Lock";
import CloseIcon from "@material-ui/icons/Close";
import CustomButton from "../../components/customButton/customButton.component";


const VerifyPhone = () => {
    const [showStatement, setStatement] = useState(true);
    const classes = useStyles();
    const history = useHistory();


    function dummyRoute(){
        history.push("/company_info");
    }
    return (
        <div className={classes.box}>
            <h3 className={classes.title}>Verify Phone Number</h3>
            <p>Fill in the registration data. It will take a few seconds.
                All you need is an activation code</p>

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
                    fontSize: '16px',
                    fontWeight: '500',
                    margin: 0,
                }}>+234 08105470291</p>
                <div className={classes.flex3}>
                    <p style={{
                        color:  'secondary',
                        paddingTop: '10px',
                        alignItems: 'center'
                    }}>Number not confirmed yet</p>
                    <EditIcon color='primary' fontSize='small' style={{cursor: 'pointer'}} />
                </div>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: '500px',
                height: 'auto',
                fontSize: '12px',
                flexWrap: 'wrap',
            }}>
                <>
                    <TextInput label='Confirmation code' placeholder='&nbsp;-- -- -- --' type='text' width='380px' />
                </>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '130px',
                    marginTop: '5px',
                    paddingTop: '5px',
                }}>
                    <ReplayIcon fontSize='small' color='primary' span='Send again'/>
                    <span style={{
                        width: '100px',
                        fontSize: '16px',
                        fontWeight: 'bold',

                        color: '#37a3ea',

                    }}>Send again</span>
                </div>
                <p style={{color: '#575f6e'}}>Confirm phone number with code from sms message</p>
        </div>
            <div className={classes.noMarg}>
                <CustomButton className={classes.noMarg} name='Continue' handleButton={dummyRoute} width='160px'/>
            </div>
        </div>
    )
}


export default VerifyPhone;
